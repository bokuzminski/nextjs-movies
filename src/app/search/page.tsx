import { MovieGrid } from "@/components/MovieGrid/MovieGrid";
import { fetchMoviesBySearchQuery } from "@/lib/movdbRequest";

export default async function SearchPage(params: { searchParams: { search: string } }) {
  const { results } = await fetchMoviesBySearchQuery(params.searchParams.search);

  return <MovieGrid movies={results} title="Search" />;
}
