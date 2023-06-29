import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

export default async function GenresSideBar() {
  const { genres } = await getGenres();

  return (
    <aside className="sticky top-0 w-1/6 mt-10 px-5">
      <nav>
        <Image src={logo} width={200} height={200} alt="logo" />
        <h1 className="text-white uppercase text-l font-semi-bold px-6">Discover</h1>
        <ul className="list-outside list-none pb-4">
          <Link href={"/"}>
            <li className="text-white px-10 font-light my-2">Popular</li>
          </Link>
          <Link href={"/"} passHref>
            <li className="text-white px-10 font-light my-2">Upcoming</li>
          </Link>
          <Link href={"/"}>
            <li className="text-white px-10 font-light my-2">Top rated</li>
          </Link>
        </ul>
        <h1 className="text-white uppercase text-l font-semi-bold px-5">Genres</h1>
        <ul className="list-outside list-none">
          {genres.map((item) => (
            <Link href={`/genre/${item.id}`} key={item.id}>
              <li className="text-white px-10 font-light my-2">{item.name}</li>
            </Link>
          ))}
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
