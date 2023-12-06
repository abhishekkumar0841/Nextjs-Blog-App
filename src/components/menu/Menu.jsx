import React from "react";
import TagButton from "../tabButton/TagButton";
import MenuHeader from "./MenuHeader";
import Image from "next/image";

const Menu = () => {
  return (
    <div className=" flex-[3] flex flex-col gap-6">
      {/* most popular */}
      <div className="">
        <MenuHeader text={"What's hot"} boldText={"Most Popular"} />
        <div>
          <TagButton title={"Travel"} />
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <p>John Doe - 01.09.2022</p>
        </div>
        <div>
          <TagButton title={"Travel"} />
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <p>John Doe - 01.09.2022</p>
        </div>
        <div>
          <TagButton title={"Travel"} />
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <p>John Doe - 01.09.2022</p>
        </div>
        <div>
          <TagButton title={"Travel"} />
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <p>John Doe - 01.09.2022</p>
        </div>
      </div>
      {/* categories */}
      <div className="">
        <MenuHeader text={"Discover by topic"} boldText={"Categories"} />
        <div className="flex item-center gap-6">
          <div className=" bg-pink-400 rounded-2xl w-fit px-4 py-1 font-bold">
            Style
          </div>
          <div className=" bg-pink-400 rounded-2xl w-fit px-4 py-1 font-bold">
            Style
          </div>
          <div className=" bg-pink-400 rounded-2xl w-fit px-4 py-1 font-bold">
            Style
          </div>
          <div className=" bg-pink-400 rounded-2xl w-fit px-4 py-1 font-bold">
            Style
          </div>
          <div className=" bg-pink-400 rounded-2xl w-fit px-4 py-1 font-bold">
            Style
          </div>
        </div>
      </div>
      {/* editors pick */}
      <div className="">
        <MenuHeader text={"Chosen by editor"} boldText={"Editor's pick"} />
        <div className="flex items-center gap-6">
          <div className=" h-[92px] w-[92px] border-4 border-gray-800 rounded-full relative">
            <Image
              src={
                "https://stockimages.org/wp-content/uploads/2020/10/bigstock-Photography-Concept-African-A-381364544.jpg"
              }
              fill={true}
              className=" rounded-full object-center"
              alt="User"
            />
          </div>
          <div>
            <TagButton title={"Travel"} />
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
            <p>John Doe - 01.09.2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
