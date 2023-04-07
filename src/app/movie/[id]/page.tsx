import { DetailedMovie } from "@/lib/movdbTypes";
import Image from "next/image";
import detailedMovieStyle from "./movie.module.css";

export default async function MovieDetailsPage(params: {
  params: { id: number };
}) {
  const movie = await getIndividualMovieDetails(params.params.id);

  return (
    <section className={detailedMovieStyle.wrapper}>
      <div className={detailedMovieStyle.innerWrapper}>
        <div className={detailedMovieStyle.contentWrapper}>
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
            <h1>{movie.title}</h1>
            <h3>Synopsis</h3>
            <p>{movie.overview}</p>
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
