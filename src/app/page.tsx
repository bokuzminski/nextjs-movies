import { MovieGrid } from "@/components/MovieGrid/MovieGrid";
import { fetchPopularMovies } from "@/lib/movdbRequest";
import { MoviesResponse } from "@/lib/movdbTypes";

export default async function Home() {
  const { results } = await getTrending();

  return <MovieGrid movies={results} title="popular" />;
}

async function getTrending() {
  const reqUrl = fetchPopularMovies();
  let header = new Headers({
    "Cache-Control": "no-cache",
    Authorization: `Bearer ${process.env.BEARER_TOKEN!}`,
    "Content-Type": "application/json"
  });
  const response: Response = await fetch(reqUrl, { headers: header });
  if (!response.ok) {
    throw new Error("failed to fetch pupular");
  }
  return (await response.json()) as MoviesResponse;
}
