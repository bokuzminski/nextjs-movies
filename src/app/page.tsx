import { MovieGrid } from "@/components/MovieGrid/MovieGrid";
import { fetchPopularMovies } from "@/lib/movdbRequest";
import { MoviesResponse } from "@/lib/movdbTypes";

export default async function Home() {
  const { results } = await getTrending();

  return (
    <>
      <MovieGrid movies={results} />
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
