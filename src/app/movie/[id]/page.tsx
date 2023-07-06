import { DetailedMovieGenres } from "@/app/movie/[id]/components/DetailedMovieGenres";
import SocialComponent from "@/components/websiteIcons/SocialComponent";
import { fetchIndividualMovieDetails } from "@/lib/movdbRequest";
import { formatMovieReleaseDate, formatMovieRuntimeToHHMM } from "@/lib/utils";
import Image from "next/image";

export default async function MovieDetailsPage(params: { params: { id: number } }) {
  const movie = await fetchIndividualMovieDetails(params.params.id);

  return (
    <main className="py-10 sm:px-">
      <section>
        <div
          className="flex flex-row max-w-full mr-8 bg-blend-multiply bg-[#121212]/75 bg-no-repeat bg-right"
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}
        >
          <Image
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
            width={400}
            height={600}
          />
          <article className="flex flex-col px-8 py-4 max-w-[60%] gap-4">
            <header className="uppercase pb-8">
              <h1 className="text-4xl font-extralight tracking-wide">{movie.title}</h1>
              <h2 className="text-lg font-bold text-gray-500">{movie.tagline}</h2>
            </header>
            <article className="flex flex-row space-x-5">
              <p>{Math.round(movie.vote_average * 10)}%</p>
              <p>{formatMovieReleaseDate(movie.release_date)}</p>
              <p>{formatMovieRuntimeToHHMM(movie.runtime)}</p>
            </article>
            <DetailedMovieGenres genres={movie.genres} />
            <h3 className="text-lg font-bold uppercase">Overview</h3>
            <p className="text-left font-medium pb-4 text-gray-300">{movie.overview}</p>
            <SocialComponent movieId={movie.id} homePage={movie.homepage} />
          </article>
        </div>
      </section>
      {/* <DetailedMovieCast movieId={movie.id} /> */}
    </main>
  );
}
