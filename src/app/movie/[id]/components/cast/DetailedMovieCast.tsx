import { CastScroller } from "@/app/movie/[id]/components/cast/CastScroller";
import { Credits } from "@/lib/movdbTypes";
import Image from "next/image";
import style from "./style.module.css";

export const DetailedMovieCast = async ({
  movieId,
}: DetailedMovieCastProps) => {
  const { cast } = await getCastForMovie(movieId);

  return (
    <div>
      <h1>Cast</h1>
      <section className={style.gliderContainer}>
        <CastScroller>
          {cast.map((actor) => {
            if (!actor.profile_path) return null;
            return (
              <div key={actor.id}>
                <Image
                  width={92}
                  height={138}
                  alt="img"
                  src={`https://image.tmdb.org/t/p/w92/${actor.profile_path}`}
                />
              </div>
            );
          })}
        </CastScroller>
      </section>
    </div>
  );
};

async function getCastForMovie(id: number) {
  const path = new URL(`movie/${id}/credits`, "https://api.themoviedb.org/3/");
  path.searchParams.set("api_key", process.env.API_KEY!);

  const response = await fetch(path.href);
  const res: Credits = await response.json();

  return res;
}

type DetailedMovieCastProps = {
  movieId: number;
};
