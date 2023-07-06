import { DetailedMovie } from "@/lib/movdbTypes";
import Link from "next/link";

export const DetailedMovieGenres = ({ genres }: DetailedMovieGenresProps) => {
  if (!genres) return null;

  return (
    <section>
      <h3 className="text-lg font-bold uppercase">Genres</h3>
      <ul className="flex flex-row gap-4">
        {genres.map((genre) => (
          <Link
            key={genre.id}
            href={{ pathname: `/genre`, query: { name: genre.name, id: genre.id, page: 1 } }}
            className="uppercase flex flex-row items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-4 h-4 "
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <li className="text-sm text-gray-300 font-bold">{genre.name}</li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

type DetailedMovieGenresProps = {
  genres: DetailedMovie["genres"];
};
