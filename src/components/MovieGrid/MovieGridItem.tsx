import { BasicMovie } from "@/lib/movdbTypes";
import Image from "next/image";
import Link from "next/link";
import style from "./page.module.css";

export const MovieGridItem: React.FC<MovieGridItemProps> = ({ movie }) => {
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
        </div>
        <h6 className={style.titleText}>
          {`${movie.title} (${movie.release_date.split("-")[0]})`}
        </h6>
      </Link>
    </div>
  );
};

type MovieGridItemProps = {
  movie: BasicMovie;
};
