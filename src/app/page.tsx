import { MovieGridItem } from "@/components/MovieGrid/MovieGridItem";
import style from "./page.module.css";

export default async function Home() {
  const { results } = await getTrending();

  return (
    <div className={style.gridContainer}>
      {results.map((movie) => (
        <MovieGridItem movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

async function getGenres() {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=3f8a72903ce666b0ca08e9e0b9141377"
  );

  return await response.json();
}

async function getTrending() {
  const path = new URL("discover/movie", "https://api.themoviedb.org/3/");
  path.searchParams.set("api_key", "3f8a72903ce666b0ca08e9e0b9141377");
  path.searchParams.set("with_genres", "35");

  const response = await fetch(path.href);

  return await response.json();
}
