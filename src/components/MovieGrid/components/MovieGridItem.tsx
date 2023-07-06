"use client";
import { BasicMovie } from "@/lib/movdbTypes";
import Image from "next/image";
import Link from "next/link";

export const MovieGridItem = ({ movie }: MovieGridItemProps) => {
  return (
    <Link
      href={`/movie/${movie.id}`}
      className="bg-slate-900 flex flex-col max-w-[300px] max-h-[500px] gap-3 rounded-lg"
    >
      <Image
        className="w-full"
        alt={movie.title}
        width={300}
        height={450}
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        placeholder="empty"
        priority
      />
      <h4 className="text-center">{`${movie.title}`}</h4>
    </Link>
  );
};

type MovieGridItemProps = {
  movie: BasicMovie;
};
