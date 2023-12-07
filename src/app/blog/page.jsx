import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className=" bg-red-400 text-white font-bold text-center rounded-xl text-2xl py-2">
        Style Blog
      </h1>
      <div className="flex items-center gap-24">
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default Blog;
