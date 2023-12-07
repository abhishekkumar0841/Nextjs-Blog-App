"use client";
import React, { useState } from "react";
import { BiCross, BiFile, BiImage, BiPlus, BiVideo, BiX } from "react-icons/bi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WriteBlog = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className=" min-h-screen">
      <h1 className=" my-10 text-center text-4xl font-bold">
        Write your blog here...
      </h1>
      <div className=" flex  flex-col gap-6 my-10">
        <div className=" flex items-center justify-between w-full">
          <input
            type="text"
            placeholder="Title of the blog"
            className=" text-2xl rounded-lg font-bold py-2 px-6 w-[80%]"
          />
          <button className=" bg-green-500 text-white px-6 py-2 font-bold text-2xl rounded-lg">
            Publish Blog
          </button>
        </div>
        <div className="flex items-center gap-10">
          <div
            onClick={() => setOpen(!open)}
            className=" border-2 border-black flex items-center justify-center h-12 w-12 rounded-full cursor-pointer"
          >
            <button className=" text-2xl font-bold">
              {!open ? <BiPlus /> : <BiX />}
            </button>
          </div>
          {open && (
            <div className="flex items-center gap-5">
              <div
                onClick={() => setOpen(!open)}
                className=" border-2 border-black flex items-center justify-center h-12 w-12 rounded-full"
              >
                <button className=" text-2xl font-bold">
                  <BiFile />
                </button>
              </div>
              <div
                onClick={() => setOpen(!open)}
                className=" border-2 border-black flex items-center justify-center h-12 w-12 rounded-full"
              >
                <button className=" text-2xl font-bold">
                  <BiImage />
                </button>
              </div>
              <div
                onClick={() => setOpen(!open)}
                className=" border-2 border-black flex items-center justify-center h-12 w-12 rounded-full"
              >
                <button className=" text-2xl font-bold">
                  <BiVideo />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* react quill section */}
      <ReactQuill
        value={value}
        onChange={setValue}
        placeholder="Your story..."
      />
    </div>
  );
};

export default WriteBlog;
