import { MovieGridItem } from "@/components/MovieGrid/MovieGridItem";
import { fetchPopularMovies } from "@/lib/movdbRequest";
import { MoviesResponse } from "@/lib/movdbTypes";
import style from "./page.module.css";

export default async function Home() {
  const { results } = await getTrending();

  return (
    <>
      <h1>Popular</h1>
      <div className={style.gridContainer}>
        {results.map((movie) => (
          <MovieGridItem key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

async function getTrending() {
  const reqUrl = fetchPopularMovies();
  const response: Response = await fetch(reqUrl);
  if (!response.ok) {
    throw new Error("failed to fetch pupular");
  }
  return (await response.json()) as MoviesResponse;
}
