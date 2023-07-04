import { MovieGrid } from "@/components/MovieGrid/MovieGrid";
import { fetchMoviesByGenre } from "@/lib/movdbRequest";

export default async function GenrePage(params: GenrePageParams) {
  const { results } = await fetchMoviesByGenre(params.searchParams.id);

  return <MovieGrid movies={results} title={params.searchParams.name} />;
}

type GenrePageParams = {
  params: {};
  searchParams: { name: string; id: string };
};
