import { DetailedMovie } from "@/lib/movdbTypes";
import Link from "next/link";

export const DetailedMovieGenres: React.FC<DetailedMovieGenresProps> = ({ genres }) => {
  if (!genres) return null;

  return (
    <div>
      <h3 className="uppercase text-sm font-bold tracking-wider">Genres</h3>
      <div className="">
        {genres.map((genre) => (
          <Link key={genre.id} href={`/genre/${genre.id}`} className="">
            <h4 className="">{genre.name}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

type DetailedMovieGenresProps = {
  genres: DetailedMovie["genres"];
};
