import { MovieGrid } from "@/components/MovieGrid/MovieGrid";
import { MovieDBRequestHeader } from "@/lib/movdbRequest";
import { MoviesResponse } from "@/lib/movdbTypes";

export default async function SearchPage(params: { searchParams: { search: string } }) {
  const { results } = await getMoviesBySearchQuery(params.searchParams.search);
  if (!results) return <h1>ERROR FETCHING</h1>;

  return <MovieGrid movies={results} title="Search" />;
}

async function getMoviesBySearchQuery(searchQuery: string) {
  const result = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}`, {
    cache: "no-cache",
    headers: MovieDBRequestHeader
  });

  return (await result.json()) as MoviesResponse;
}
