import Image from "next/image";
import style from "./page.module.css";

export default async function GenrePage(params) {
  console.log(params);

  const movies = await getMoviesByGenre(params.params.name);

  return (
    <h1>
      {params.params.name}
      <div className={style.container}>
        {movies.results.map((movie) => (
          <div key={movie.id} className={style.item}>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              width={342}
              height={513}
              alt="image"
            />
            <h5>{movie.title}</h5>
          </div>
        ))}
      </div>
    </h1>
  );
}

async function getMoviesByGenre(genre: string) {
  const result = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=3f8a72903ce666b0ca08e9e0b9141377&with_genres=${genre}`
  );

  return await result.json();
}
