import React from "react";
import { navLinksData } from "./navLinksData";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between">
      {/* logo */}
      <div>
        <h1 className=" text-4xl font-bold">
          P.Y.B. <span className=" text-sm font-semibold">Post Your Blog</span>
        </h1>
      </div>

      {/* list items */}
      <div className=" flex items-center gap-10 list-none">
        {navLinksData.map((el) => (
          <li key={el.id}>
            <Link href={el.link}>{el.title}</Link>
          </li>
        ))}
        <AuthLinks/>
      </div>
    </div>
  );
};

export default Navbar;
