"use client";
import { BasicMovie } from "@/lib/movdbTypes";
import Image from "next/image";
import Link from "next/link";

export const MovieGridItem: React.FC<MovieGridItemProps> = ({ movie }) => {
  const releaseYear = movie.release_date ? movie.release_date.split("-")[0] : "";

  return (
    <div className="">
      <Link href={`/movie/${movie.id}`}>
        <div className="">
          <Image
            className=""
            alt={movie.title}
            width={300}
            height={450}
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            placeholder="empty"
            priority
          />
          <h3 className="">{movie.vote_average}</h3>
        </div>
        <h6 className="text-white text-center mt-2 font-medium text-lg">{`${movie.title} (${releaseYear})`}</h6>
      </Link>
    </div>
  );
};

type MovieGridItemProps = {
  movie: BasicMovie;
};
