import Image from "next/image";
import React from "react";
import Button from "../button/Button";
import Link from "next/link";

const Feature = () => {
  return (
    <div className=" flex flex-col gap-10">
      <div className="">
        <h1 className=" text-8xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h1>
      </div>
      <div className=" flex items-center gap-10 flex-1">
        <div>
          <Image
            src={"https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?cs=srgb&dl=adventure-alps-background-547114.jpg&fm=jpg"}
            height={400}
            width={600}
            className=" object-cover"
          />
        </div>
        <div className=" flex-1 flex flex-col gap-6">
          <h1 className=" text-xl font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          </h1>
          <p >
            voluptates temporibus ratione corrupti tempore amet adipisci,
            dolorum rerum assumenda optio quaerat omnis quibusdam inventore
            sequi enim nemo qui hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde earum minima blanditiis ratione nisi quia aspernatur incidunt, assumenda magni. Quos, nostrum fuga aperiam inventore sit incidunt amet sequi laboriosam assumenda!
          </p>
          <Button>
            <Link href={"#"}>Read More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
