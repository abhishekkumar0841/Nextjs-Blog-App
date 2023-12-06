import React from "react";
import {
  BiCopyright,
  BiLogoDiscord,
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitch,
  BiLogoYoutube,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div className=" bg-gray-300 text-gray-800 flex items-center justify-between py-2 px-6">
      <h1 className="flex items-center text-2xl ">
        <BiCopyright />opyright <span className=" ml-4 font-bold"> @Abhishek Kumar</span>
      </h1>
      <div className=" flex items-center gap-3 text-2xl font-bold">
        <BiLogoInstagram />
        <BiLogoFacebook />
        <BiLogoTwitch />
        <BiLogoDiscord />
        <BiLogoYoutube />
        <BiLogoLinkedin />
        <BiLogoGithub />
      </div>
    </div>
  );
};

export default Footer;
