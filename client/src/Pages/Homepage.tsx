import React from "react";
import HomeImg from "../assets/Component 1.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="mx-auto w-360 flex items-center justify-center gap-45 py-10">
      <div className="flex flex-col gap-12 items-start w-133.75">
        <h1 className="text-[50px] font-medium text-[#292929] leading-[100%] text-left">
          Manage your Tasks on <span className="text-[#974FD0]">TaskDuty</span>
        </h1>
        <p className="text-[24px] font-medium text-[#737171] leading-[100%] text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus,
          sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea
          tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl
          semper porttitor. Nec accumsan.
        </p>
        <Link
          to="/task"
          className="bg-[#974FD0] px-6.25 py-2.5 rounded-lg text-[#FAF9FB] font-medium text-[24px]"
        >
          Go to My Tasks
        </Link>
      </div>
      <div>
        <img src={HomeImg} alt="" />
      </div>
    </div>
  );
};

export default Homepage;
