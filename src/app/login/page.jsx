"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { BiLogoFacebook, BiLogoGithub, BiLogoGoogle } from "react-icons/bi";

const LoginPage = () => {
  const { data, status } = useSession();
  console.log("Data in login--", data);
  console.log("Status in login--", status);

  const router = useRouter()

  if(status === 'loading'){
    return <div className=" text-6xl font-bold">
      Loading...
    </div>
  }

  if(status === 'authenticated'){
    router.push('/')
  }

  return (
    <div className=" flex items-center justify-center gap-10 flex-col min-h-[80vh]">
      <h1 className=" text-4xl font-bold">Login here...</h1>
      <div className=" flex items-center gap-10 flex-col">
        <div className=" bg-black text-white flex items-center gap-2 py-2 w-52 font-bold rounded-lg text-2xl cursor-pointer justify-center">
          <p>Login with</p>
          <BiLogoGithub className=" border-2 border-white rounded-full " />
        </div>
        <div
          onClick={() => signIn("google")}
          className=" bg-red-500 text-white flex items-center gap-2 py-2 w-52 font-bold rounded-lg text-2xl cursor-pointer justify-center"
        >
          <p>Login with</p>
          <BiLogoGoogle className=" border-2 border-white rounded-full " />
        </div>
        <div className=" bg-blue-500 text-white flex items-center gap-2 py-2 w-52 font-bold rounded-lg text-2xl cursor-pointer justify-center">
          <p>Login with</p>
          <BiLogoFacebook className=" border-2 border-white rounded-full " />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
