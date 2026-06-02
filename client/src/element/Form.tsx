import React from "react";
import { RiArrowDownWideFill } from "react-icons/ri";

const Form = () => {
  return (
    <form action="" className="flex flex-col gap-12 pt-9">
      <div className="flex flex-col gap-9 mx-auto">
        <div className="relative w-270">
          <label
            htmlFor=""
            className="absolute -top-5 left-5 bg-[#FFFFFF] text-[30px] text-[#9C9C9C] text-normal"
          >
            Task Title
          </label>
          <input
            type="text"
            placeholder="E.g Project Defense, Assignment ..."
            className="w-270 pb-7 pt-4 pl-5  border border-[#B8B6B6] rounded-sm placeholder:text-[#CCCCCC] text-[22px] text-normal"
          />
        </div>

        <div className="relative w-270">
          <label
            htmlFor=""
            className="absolute -top-5 left-5 bg-[#FFFFFF] text-[30px] text-[#9C9C9C] text-normal"
          >
            Description
          </label>
          <input
            type="text"
            placeholder="Briefly describe your task..."
            className="w-270 pb-50 pt-6 pl-5 border border-[#B8B6B6] rounded-sm placeholder:text-[#CCCCCC] text-[22px] text-normal"
          />
        </div>
        <div className="relative w-270">
          <label
            htmlFor=""
            className="absolute -top-6 left-5 bg-[#FFFFFF] text-[30px] text-[#9C9C9C] text-normal"
          >
            Tags
          </label>
          <input
            type="text"
            className="w-270 pb-9 pt-4 pl-5  border border-[#B8B6B6] rounded-sm "
          />
          <div className="absolute top-4.5 left-3 gap-3 flex justify-between items-center w-262">
            <div className="flex gap-3">
              <span className="bg-[#9C9C9C] rounded-[3px] text-[22px] text-[#CCCCCC] font-normal p-1">
                Urgent
              </span>
              <span className="bg-[#9C9C9C] rounded-[3px] text-[22px] text-[#CCCCCC] font-normal p-1">
                Important
              </span>
            </div>
            <RiArrowDownWideFill className="text-[30px] text-[#9C9C9C]" />
          </div>
        </div>
      </div>

      <button className="mx-auto bg-[#974FD0] w-270 py-1 rounded-lg text-[35px] font-medium text-[#FAF9FB]">
        Done
      </button>
    </form>
  );
};

export default Form;
