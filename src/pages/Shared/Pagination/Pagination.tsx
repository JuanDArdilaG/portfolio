import React, { PropsWithoutRef } from "react";

export type PaginationPages = "Home" | "About Me" | "My Experience";

export interface PaginationProps {
  selected: PaginationPages;
}

const pages = [
  { title: "Home" },
  { title: "About Me" },
  { title: "My Experience" },
];

export default function Pagination({
  selected,
}: PropsWithoutRef<PaginationProps>) {
  return (
    <div className="fixed left-0 h-full flex flex-col justify-center">
      {pages.map((page) => (
        <div
          title={page.title}
          className={`ml-3 my-4 w-3 h-3 rounded-full ${
            selected === page.title ? "bg-gray-300" : ""
          }`}
        >
          <div
            title={page.title}
            className={`w-2 h-2 rounded-full ${
              selected === page.title
                ? "bg-gray-500 hover:bg-gray-400"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            style={{ marginLeft: "2px", marginTop: "2px" }}
          ></div>
        </div>
      ))}
    </div>
  );
}
