import Link from "next/link";
import style from "./genres.module.css";

export default async function GenresSideBar() {
  const { genres } = await getGenres();

  return (
    <aside className="sticky top-0 w-1/6 py-10">
      <nav className={style.inner}>
        {/* <Image src={logo} width={200} height={200} alt="logo" /> */}
        <h1 className="text-gray-400/70 font-medium uppercase">Discover</h1>
        <ul className="list-outside list-none">
          <div className={style.linkWrap}>
            <Link href={"/"}>
              <li className={style.link}>Popular</li>
            </Link>
          </div>
          <div className={style.linkWrap}>
            <Link href={{ query: { name: "upcoming" }, href: "/upcoming" }} passHref>
              <li className={style.link}>Upcoming</li>
            </Link>
          </div>
          <div className={style.linkWrap}>
            <Link href={"/"}>
              <li className={style.link}>Top rated</li>
            </Link>
          </div>
        </ul>
        <h1 className="text-gray-400/70 font-medium uppercase">Genres</h1>
        <ul className={style.ul}>
          {genres.map((genre) => {
            return (
              <div className={style.linkWrap} key={genre.id}>
                <Link href={`/genre/${genre.id}`}>
                  <li className="font-semibold text-gray-400/70">{genre.name}</li>
                </Link>
              </div>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

async function getGenres() {
  const path = new URL("genre/movie/list", "https://api.themoviedb.org/3/");
  path.searchParams.set("api_key", "3f8a72903ce666b0ca08e9e0b9141377");

  const response = await fetch(path.href);

  return (await response.json()) as Genres;
}

type Genres = {
  genres: { id: string; name: string }[];
};
