import { MovieGrid } from "@/components/MovieGrid/MovieGrid";
import { Pagination } from "@/components/Pagination/Pagination";
import { fetchPopularMovies } from "@/lib/movdbRequest";

export default async function Home({ searchParams: { page } }: HomeProps) {
  const { results } = await fetchPopularMovies(Number(page));

  return (
    <section className="flex flex-col items-center justify-center">
      <MovieGrid movies={results} title="popular" />
      <Pagination />
    </section>
  );
}

type HomeProps = {
  params: {};
  searchParams: { page: string };
};
