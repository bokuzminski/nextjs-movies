import { DetailedMovieGenres } from "@/app/movie/[id]/components/DetailedMovieGenres";
import SocialComponent from "@/components/websiteIcons/SocialComponent";
import { DetailedMovie } from "@/lib/movdbTypes";
import { formatMovieReleaseDate, formatMovieRuntimeToHHMM } from "@/lib/utils";
import Image from "next/image";

export default async function MovieDetailsPage(params: { params: { id: number } }) {
  const movie = await getIndividualMovieDetails(params.params.id);

  return (
    <main className="flex-1 py-10 px-5 sm:px-">
      <section>
        <div
          className="flex flex-row space-x-10 mt-4 bg-black/50 bg-blend-multiply rounded-3xl bg-cover bg-center px-10 pt-4 pb-6 text-white"
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}
        >
          <Image
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
            width={400}
            height={600}
            className=""
          />
          <div className="flex  flex-col -mx-7 -mb-6 px-7 pb-6 pt-2">
            <h1 className="uppercase text-3xl font-semibold drop-shadow-lg">{movie.title}</h1>
            <h2 className="text-2xl">{movie.tagline}</h2>
            <p className="text-left max-w-xl">{movie.overview}</p>
            <div className="flex flex-row space-x-5">
              <h2>{formatMovieReleaseDate(movie.release_date)}</h2>
              <h2>{formatMovieRuntimeToHHMM(movie.runtime)}</h2>
            </div>
            <div className="">
              <DetailedMovieGenres genres={movie.genres} />
            </div>
          </div>
          <SocialComponent movieId={movie.id} homePage={movie.homepage} />
        </div>
      </section>
      {/* <DetailedMovieCast movieId={movie.id} /> */}
    </main>
  );
}

async function getIndividualMovieDetails(movieId: number) {
  const path = new URL(`movie/${movieId}`, "https://api.themoviedb.org/3/");
  path.searchParams.set("api_key", process.env.API_KEY!);

  const response = await fetch(path.href);

  return (await response.json()) as DetailedMovie;
}
