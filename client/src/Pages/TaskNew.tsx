import React from "react";
import Form from "../element/Form";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const TaskNew = () => {
  return (
    <div className="mx-auto pt-12 flex flex-col gap-6">
      <div className="flex items-center gap-1">
        <MdOutlineArrowBackIosNew className="text-[40px] text-[#292929]" />
        <p className="text-[50px] text-[#292929] font-medium">New Task</p>
      </div>
      <Form />
      <p className="text-[26px] font-normal text-[#974FD0] underline">
        Back To Top
      </p>
    </div>
  );
};

export default TaskNew;
