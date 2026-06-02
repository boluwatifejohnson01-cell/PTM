import React from "react";
import ContentBox from "../element/ContentBox";
import { GoPlus } from "react-icons/go";

const Taskpage = () => {
  return (
    <div className="mx-auto pt-6 flex flex-col gap-6">
      <div className="flex justify-between gap-3">
        <p className="text-[50px] text-[#292929] font-medium">My Tasks</p>
        <div className="flex items-center gap-3">
          <GoPlus className="text-[24px] text-[#974FD0]" />
          <p className="text-[24px] text-[#974FD0] font-medium">Add New Task</p>
        </div>
      </div>

      <ContentBox />
      <p className="text-[26px] font-normal text-[#974FD0] underline">
        Back To Top
      </p>
    </div>
  );
};

export default Taskpage;
