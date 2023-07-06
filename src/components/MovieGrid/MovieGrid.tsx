import { MovieGridItem } from "@/components/MovieGrid/components/MovieGridItem";
import { BasicMovie, MoviesResponse } from "@/lib/movdbTypes";

export const MovieGrid: React.FC<MovieGridProps> = ({ movies, title = "" }) => {
  return (
    <section className="mt-10">
      <header className="mb-5">
        <h1 className="text-2xl text-white uppercase font-bold">{title}</h1>
        <h2 className="text-l text-white uppercase font-semibold">MOVIES</h2>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-5 gap-5 pr-4">{movies.map(mapMoviesIntoView)}</section>
    </section>
  );
};

function mapMoviesIntoView(movie: BasicMovie) {
  return <MovieGridItem key={movie.id} movie={movie} />;
}

type MovieGridProps = { movies: MoviesResponse["results"]; title?: string };
