import { BasicMovie } from "@/lib/movdbTypes";
import Image from "next/image";
import Link from "next/link";
import style from "./MovieGridItemStyle.module.css";

export const MovieGridItem: React.FC<MovieGridItemProps> = ({ movie }) => {
  const releaseYear = movie.release_date
    ? movie.release_date.split("-")[0]
    : "";

  return (
    <div className={style.movieItemContainer}>
      <Link href={`/movie/${movie.id}`}>
        <div className={style.frame}>
          <Image
            className={style.poster}
            alt={movie.title}
            width={300}
            height={450}
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            placeholder="empty"
            priority
          />
          <h3 className={style.score}>{movie.vote_average}</h3>
        </div>
        <h6 className={style.titleText}>{`${movie.title} (${releaseYear})`}</h6>
      </Link>
    </div>
  );
};

type MovieGridItemProps = {
  movie: BasicMovie;
};
