import React from "react";
import Link from "next/link";
// import VisitorCounter from "./VisitorCounter";

export default function Footer() {
  return (
    <div className="h-20 flex items-end justify-center bg-none">
      <footer className="p-5 z-12 pb-4 mx-auto text-white footer footer-center text-base-content">

        <div>
          <p className="flex items-center justify-center text-md sm:text-2xl font-chakra">
            Made with    <span className="text-cyan-400 mx-1">   💚  </span>    by
            <Link
              href="https://www.linkedin.com/company/team-vibhav/"
              className="sm:text-3xl text-xl text-[#78B159] cursor-pointer"
            >
              {" "}Team Vibhav{" "}
            </Link>
          </p>
        </div>

        {/* <VisitorCounter /> */}

      </footer>
    </div>
  );
}
