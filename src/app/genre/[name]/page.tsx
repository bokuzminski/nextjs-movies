import { MovieGrid } from "@/components/MovieGrid/MovieGrid";
import { MoviesResponse } from "@/lib/movdbTypes";

export default async function GenrePage(params: { params: { name: string } }) {
  const { results } = await getMoviesByGenre(params.params.name);

  return <MovieGrid movies={results} />;
}

async function getMoviesByGenre(genre: string) {
  const result = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=3f8a72903ce666b0ca08e9e0b9141377&with_genres=${genre}`
  );

  return (await result.json()) as MoviesResponse;
}
