import Link from "next/link";
import React from "react";
import Button from "../button/Button";

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
          <Button>Logout</Button>
        </div>
      )}
    </div>
  );
};

export default AuthLinks;
