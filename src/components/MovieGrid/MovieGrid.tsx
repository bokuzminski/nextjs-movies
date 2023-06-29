import { MovieGridItem } from "@/components/MovieGrid/components/MovieGridItem";
import { BasicMovie, MoviesResponse } from "@/lib/movdbTypes";

export const MovieGrid: React.FC<MovieGridProps> = ({ movies, title = "" }) => {
  return (
    <section>
      <div className="mt-10 mr-10 pl-2">
        <div className="pb-5">
          <h1 className="text-2xl text-white uppercase font-bold">{title}</h1>
          <h2 className="text-l text-white uppercase font-semibold">MOVIES</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-5">{movies.map(mapMoviesIntoView)}</div>
      </div>
    </section>
  );
};

function mapMoviesIntoView(movie: BasicMovie) {
  return <MovieGridItem key={movie.id} movie={movie} />;
}

type MovieGridProps = { movies: MoviesResponse["results"]; title?: string };
