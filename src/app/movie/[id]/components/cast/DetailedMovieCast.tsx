import { fetchCastForMovie } from "@/lib/movdbRequest";
import Image from "next/image";
import avatar_missing from "public/avatar_missing.svg";

export const DetailedMovieCast = async ({ movieId }: DetailedMovieCastProps) => {
  const { cast } = await fetchCastForMovie(movieId);

  return (
    <section className="flex flex-col gap-4 pt-4">
      <h1 className="text-lg font-bold uppercase">Cast</h1>
      <ul className="flex flex-row gap-3 overflow-x-auto over">
        {cast.slice(0, 10).map((actor) => {
          return (
            <li key={actor.id} className="pb-4">
              {!!actor.profile_path ? (
                <Image
                  width={185}
                  height={278}
                  alt={actor.name}
                  className="rounded-lg"
                  src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`}
                />
              ) : (
                <Image width={185} height={278} alt={actor.name} className="h-[278px]" src={avatar_missing} />
              )}
              <h6 className="text-center">{actor.name}</h6>
              <p className="text-center text-gray-500">{actor.character}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

type DetailedMovieCastProps = {
  movieId: number;
};
