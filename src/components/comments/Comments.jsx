"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../button/Button";
import Link from "next/link";

const Comments = () => {
  const [status, setStatus] = useState("auth0");
  const [isComment, setIsComment] = useState(true);
  return (
    <div className=" my-10">
      <h1 className=" text-4xl font-bold">Comments</h1>
      {status === "auth" ? (
        <div className=" my-10 flex items-center gap-6">
          <textarea
            name="comment"
            className=" w-full resize-none text-sm py-4 px-10 font-semibold"
            placeholder="write your comments here..."
          ></textarea>
          <button className=" bg-green-500 text-white font-bold py-2 px-8 rounded-lg">
            Send
          </button>
        </div>
      ) : (
        <div className=" my-10">
          <Button>
            <Link href={"/login"}>Login to comment</Link>
          </Button>
        </div>
      )}

      {isComment ? (
        <div className="">
          <div className=" flex items-center gap-4 ">
            <div className=" relative w-10 h-10">
              <Image
                src={
                  "https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?cs=srgb&dl=adventure-alps-background-547114.jpg&fm=jpg"
                }
                alt="User"
                fill={true}
                className=" rounded-full"
              />
            </div>
            <div>
              <h1 className=" font-bold text-sm">John Doe</h1>
              <p className=" font-semibold text-xs">22-03-2023</p>
            </div>
          </div>
          <div className="mt-2">
            <h1 className=" font-semibold text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
              exercitationem nulla rem soluta voluptatibus vero expedita impedit
              itaque fugiat, facere maxime, quo possimus repudiandae adipisci
              neque ipsum perspiciatis commodi explicabo?
            </h1>
          </div>
        </div>
      ) : (
        <div>
          <h1>No comments yet...</h1>
        </div>
      )}
    </div>
  );
};

export default Comments;
