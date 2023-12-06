import Image from "next/image";
import React from "react";

const CategoryList = () => {
  return (
    <div className=" my-10">
      <h1 className=" text-4xl font-bold mb-4">Popular Categories of blogs</h1>
      <div className=" flex items-center gap-10">
        <div className=" flex items-center gap-4 border-2 border-blue-400 w-fit px-6 py-1 rounded-lg">
          <div className=" h-[32px] w-[32px] relative">
            <Image
              src={
                "https://stockimages.org/wp-content/uploads/2020/10/bigstock-Photography-Concept-African-A-381364544.jpg"
              }
              fill={true}
              className=" rounded-full "
            />
          </div>
          <p>Category</p>
        </div>
        <div className=" flex items-center gap-4 border-2 border-blue-400 w-fit px-6 py-1 rounded-lg">
          <div className=" h-[32px] w-[32px] relative">
            <Image
              src={
                "https://stockimages.org/wp-content/uploads/2020/10/bigstock-Photography-Concept-African-A-381364544.jpg"
              }
              fill={true}
              className=" rounded-full "
              alt="User"
            />
          </div>
          <p>Category</p>
        </div>
        <div className=" flex items-center gap-4 border-2 border-blue-400 w-fit px-6 py-1 rounded-lg">
          <div className=" h-[32px] w-[32px] relative">
            <Image
              src={
                "https://stockimages.org/wp-content/uploads/2020/10/bigstock-Photography-Concept-African-A-381364544.jpg"
              }
              fill={true}
              className=" rounded-full "
            />
          </div>
          <p>Category</p>
        </div>
        <div className=" flex items-center gap-4 border-2 border-blue-400 w-fit px-6 py-1 rounded-lg">
          <div className=" h-[32px] w-[32px] relative">
            <Image
              src={
                "https://stockimages.org/wp-content/uploads/2020/10/bigstock-Photography-Concept-African-A-381364544.jpg"
              }
              fill={true}
              className=" rounded-full "
            />
          </div>
          <p>Category</p>
        </div>
        <div className=" flex items-center gap-4 border-2 border-blue-400 w-fit px-6 py-1 rounded-lg">
          <div className=" h-[32px] w-[32px] relative">
            <Image
              src={
                "https://stockimages.org/wp-content/uploads/2020/10/bigstock-Photography-Concept-African-A-381364544.jpg"
              }
              fill={true}
              className=" rounded-full "
            />
          </div>
          <p>Category</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
