"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const createSearchParams = (name: string, value: string) => {
  const params = new URLSearchParams();
  params.set(name, value);

  return params.toString();
};

export const SearchItemNavbar = () => {
  const router = useRouter();
  const [text, setText] = useState("");

  return (
    <div className="absolute flex top-0 right-0 my-10 mr-10">
      <form className="flex" onSubmit={logSubmit}>
        <input
          type="search"
          className="bg-purple-white shadow rounded-full border-0 p-3"
          placeholder="Search movies..."
          onChange={(t) => setText(t.target.value)}
        />
      </form>
    </div>
  );

  function logSubmit(e: FormEvent) {
    e.preventDefault();
    if (!text) {
      router.push("/");
      return;
    }
    router.push("/search" + "?" + createSearchParams("search", text));
  }
};
