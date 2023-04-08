import { DetailedMovie } from "@/lib/movdbTypes";
import Link from "next/link";
import style from "./DetailedMovieGenres.module.css";

export const DetailedMovieGenres: React.FC<DetailedMovieGenresProps> = ({
  genres,
}) => {
  if (!genres) return null;

  return (
    <div>
      <h1 className={style.title}>Genre</h1>
      <div className={style.genresContainer}>
        {genres.map((genre) => (
          <Link
            key={genre.id}
            href={`/genre/${genre.id}`}
            className={style.genreWrapper}
          >
            <h3 className={style.genreName}>{genre.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

type DetailedMovieGenresProps = {
  genres: DetailedMovie["genres"];
};
