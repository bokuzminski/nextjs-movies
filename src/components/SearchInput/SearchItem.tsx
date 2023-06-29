"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import SearchIcon from "../../../public/search.svg";
import style from "./Search.module.css";

const createSearchParams = (name: string, value: string) => {
  const params = new URLSearchParams();
  params.set(name, value);

  return params.toString();
};

export const SearchItemNavbar = () => {
  const router = useRouter();
  const [text, setText] = useState("");

  return (
    <div className={style.search}>
      <form className={style.form} onSubmit={logSubmit}>
        <button aria-label="Search for movies" className={style.button}>
          <Image src={SearchIcon} width={16} height={16} alt="search" className={style.searchIcon} />
        </button>
        <input className={style.input} placeholder="Search for movies" onChange={(e) => setText(e.target.value)} />
      </form>
    </div>
  );

  function logSubmit(e: FormEvent) {
    e.preventDefault();
    if (!text || text === "" || text === " ") {
      router.push("/");
      return;
    }
    router.push("/search" + "?" + createSearchParams("search", text));
  }
};
