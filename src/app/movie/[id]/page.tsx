import { DetailedMovieGenres } from "@/app/movie/[id]/components/DetailedMovieGenres";
import { DetailedMovieCast } from "@/app/movie/[id]/components/cast/DetailedMovieCast";
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
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
            width: "100%",
            height: "100%",
          }}
        >
          <div className={detailedMovieStyle.posterContainer}>
            <Image
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              width={300}
              height={450}
              className={detailedMovieStyle.posterImage}
            />
          </div>
          <section className={detailedMovieStyle.MovieDetailsContainer}>
            <div className={detailedMovieStyle.headerSection}>
              <h1 className={detailedMovieStyle.movieTitle}>{movie.title}</h1>
              <h2 className={detailedMovieStyle.movieTagline}>
                {movie.tagline}
              </h2>
              <h2>Release Date</h2>
              <h2>{formatMovieReleaseDate(movie.release_date)}</h2>
              <h2>{formatMovieRuntimeToHHMM(movie.runtime)}</h2>
            </div>
            <DetailedMovieGenres genres={movie.genres} />
            <h3 className={detailedMovieStyle.synopsis}>Synopsis</h3>
            <p className={detailedMovieStyle.movieOverview}>{movie.overview}</p>
          </section>
        </div>
        {/* @ts-expect-error Async Server Component */}
        <DetailedMovieCast movieId={movie.id} />
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
