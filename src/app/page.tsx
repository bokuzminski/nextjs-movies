import { MovieGrid } from "@/components/MovieGrid/MovieGrid";
import { Pagination } from "@/components/Pagination/Pagination";
import { fetchPopularMovies } from "@/lib/movdbRequest";

export default async function Home({ searchParams: { page } }: HomeProps) {
  const { results } = await fetchPopularMovies(Number(page));

  return (
    <div className="flex flex-col">
      <MovieGrid movies={results} title="popular" />
      <Pagination />
    </div>
  );
}

type HomeProps = {
  params: {};
  searchParams: { page: string };
};
