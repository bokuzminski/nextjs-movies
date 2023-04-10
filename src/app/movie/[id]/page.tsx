import { DetailedMovieGenres } from "@/app/movie/[id]/components/DetailedMovieGenres";
import SocialComponent from "@/components/websiteIcons/SocialComponent";
import { DetailedMovie } from "@/lib/movdbTypes";
import { formatMovieReleaseDate, formatMovieRuntimeToHHMM } from "@/lib/utils";
import Image from "next/image";
import detailedMovieStyle from "./movie.module.css";

export default async function MovieDetailsPage(params: {
  params: { id: number };
}) {
  const movie = await getIndividualMovieDetails(params.params.id);

  return (
    <section className={detailedMovieStyle.wrapper}>
      <div className={detailedMovieStyle.innerWrapper}>
        <div
          className={detailedMovieStyle.contentWrapper}
          /*
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
            backgroundPositionX: "5rem",
            backgroundPositionY: "6rem",
            width: "100%",
            height: "100%",
          }} */
        >
          <div className={detailedMovieStyle.posterContainer}>
            <Image
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
              width={400}
              height={600}
              className={detailedMovieStyle.posterImage}
            />
          </div>
          <section className={detailedMovieStyle.MovieDetailsContainer}>
            <div className={detailedMovieStyle.headerSection}>
              <h1 className={detailedMovieStyle.movieTitle}>{movie.title}</h1>
              <h2 className={detailedMovieStyle.movieTagline}>
                {movie.tagline}
              </h2>
              <div className={detailedMovieStyle.runTimeDetails}>
                <h2>{formatMovieReleaseDate(movie.release_date)}</h2>
                <h2>{formatMovieRuntimeToHHMM(movie.runtime)}</h2>
              </div>
            </div>
            <DetailedMovieGenres genres={movie.genres} />
            <h3 className={detailedMovieStyle.synopsis}>Synopsis</h3>
            <p className={detailedMovieStyle.movieOverview}>{movie.overview}</p>
            {/* @ts-expect-error Async Server Component */}
            <SocialComponent movieId={movie.id} homePage={movie.homepage} />
          </section>
        </div>
      </div>
    </section>
  );
}

async function getIndividualMovieDetails(movieId: number) {
  const path = new URL(`movie/${movieId}`, "https://api.themoviedb.org/3/");
  path.searchParams.set("api_key", process.env.API_KEY!);

  const response = await fetch(path.href);

  return (await response.json()) as DetailedMovie;
}

async function getCredits(id: number) {
  const path = new URL(`movie/${id}/credits`, "https://api.themoviedb.org/3/");
  path.searchParams.set("api_key", process.env.API_KEY!);

  const resp = await fetch(path.href);

  return await resp.json();
}
