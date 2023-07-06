import Link from "next/link";

export const GenreListItem = ({ id, name }: GenreListItemProps) => {
  return (
    <Link href={{ pathname: `/genre`, query: { name, id, page: 1 } }} className="flex items-center my-2 px-8">
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
      <li className="text-white px-2 font-light">{name}</li>
    </Link>
  );
};

type GenreListItemProps = {
  name: string;
  id: string;
};
