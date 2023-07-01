"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";

export const Pagination = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page");
  const convertPageIndexToNumber = Number(currentPage) - 1;

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={500}
      initialPage={convertPageIndexToNumber}
      previousLabel="<"
      nextClassName="px-4"
      previousClassName="px-4"
      breakClassName="px-4"
      renderOnZeroPageCount={null}
      className="bg-white flex flex-row items-center justify-center mt-8"
      containerClassName="border-8"
      pageClassName="text-lg px-4 border"
      activeClassName="text-black bg-sky-400"
    />
  );

  function handlePageClick(selectedItem: { selected: number }) {
    const newParams = new URLSearchParams();
    newParams.set("page", (selectedItem.selected + 1).toString());
    router.push(pathname + "?" + newParams.toString());
  }
};
