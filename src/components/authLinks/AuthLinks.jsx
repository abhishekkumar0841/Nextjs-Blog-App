"use client";
import Link from "next/link";
import React from "react";
import Button from "../button/Button";
import { signOut } from "next-auth/react";

const AuthLinks = () => {
  const status = "authenticated";
  return (
    <div>
      {status === "unauthenticated" ? (
        <Button>
          <Link href={"/login"}>Login</Link>
        </Button>
      ) : (
        <div className=" flex gap-10">
          <Button>
            <Link href={"/write"}>Write Blog</Link>
          </Button>
          <button
            onClick={signOut}
            className=" bg-red-400 text-gray-100 px-6 py-1 rounded-md font-bold w-fit"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthLinks;
