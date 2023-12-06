import React from "react";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Button from "../button/Button";

const CardList = () => {
  return (
    <div className=" flex-[5]">
      <h1 className=" text-4xl font-bold my-4">Recent Posts</h1>
      <div className="flex w-full">
        <div className=" w-1/2">
          <div className=" h-[300px] w-[300px] relative">
            <Image
              src={
                "https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?cs=srgb&dl=adventure-alps-background-547114.jpg&fm=jpg"
              }
              fill={true}
            />
          </div>
        </div>
        <div className=" w-1/2 flex flex-col gap-4">
          <p>03/06/2023 - CULTURE</p>
          <h1 className=" text-2xl font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas nisi
            error ea recusandae est facilis. Earum magnam dolorum, doloribus
            ipsa quia minus vitae dolorem rem hic eius delectus repellat
            aperiam.
          </p>
          <Button>Read more</Button>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
