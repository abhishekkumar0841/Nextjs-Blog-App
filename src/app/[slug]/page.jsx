import Comments from "@/components/comments/Comments";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import React from "react";

const SinglePage = () => {
  return (
    <div className="">
      <div className=" flex items-center justify-between">
        {/* left div */}
        <div className="flex flex-col h-[300px] justify-between">
          <h1 className=" text-6xl font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
            architecto?
          </h1>
          <div className=" flex items-center gap-5">
            <div className=" w-8 h-8 relative">
              <Image
                src={
                  "https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?cs=srgb&dl=adventure-alps-background-547114.jpg&fm=jpg"
                }
                fill={true}
                alt="User"
                className=" rounded-full"
              />
            </div>
            <div>
              <h1 className=" text-lg font-bold">William </h1>
              <p className="text-sm font-bold">25 April 2023</p>
            </div>
          </div>
        </div>

        {/* right div */}
        <div>
          <div className="w-[400px] h-[300px] relative">
            <Image
              src={
                "https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?cs=srgb&dl=adventure-alps-background-547114.jpg&fm=jpg"
              }
              fill={true}
              alt="Blog"
            />
          </div>
        </div>
      </div>

      {/* blog content and other stuff */}
      <div className=" flex gap-12 mt-10">
        {/* left section */}
        <div>
          {/* blog description section */}
          <div className=" flex flex-col gap-6 text-lg font-semibold">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
              commodi nisi aperiam culpa aliquam iste, perspiciatis aut veniam
              blanditiis autem pariatur sit quos saepe, in numquam eligendi.
              Corrupti in amet voluptatibus autem tenetur eaque, aperiam soluta
              sit dicta, repudiandae nesciunt facilis porro sapiente laudantium
              quae sequi ut error repellat modi ad expedita itaque. Natus
              delectus adipisci atque! Nulla quaerat, magni labore quidem
              consequuntur accusamus architecto adipisci delectus facere,
              quibusdam quae dignissimos dolor. Saepe eligendi, repudiandae
              minus, quam autem assumenda veritatis maiores quis, quod itaque
              nemo mollitia culpa earum id molestias facilis. Veritatis
              voluptas, nesciunt eaque nobis ab vitae quae aut.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ex
              dolorem, voluptates reiciendis aut nulla perspiciatis! Fuga, ex ut
              modi sint minus facere. Dolorem id eius magnam, molestias quisquam
              rerum nam consequatur tempore at cumque ea minus eos pariatur
              temporibus minima nemo aliquid similique neque quia reiciendis ad
              non aliquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              culpa debitis consequuntur odio maiores explicabo, inventore nam
              eos sit harum.
            </p>
          </div>

          {/* comment */}
          <Comments/>
        </div>

        {/* right section */}
        <div>
            <Menu/>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
