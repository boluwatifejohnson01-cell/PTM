import React from "react";
import { PiNotePencilDuotone } from "react-icons/pi";
import { HiOutlineTrash } from "react-icons/hi2";

const ContentBox = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-277.5 h-full border border-[#B8B6B6] rounded-[10px] py-3">
      <div className="mx-auto flex items-end justify-between w-270">
        <p className="text-[#F38383] font-normal text-[24px]">Urgent</p>

        <div className="flex gap-3">
          <button className="bg-[#974FD0] px-6.25 rounded-lg flex gap-2 items-center h-12.5">
            <PiNotePencilDuotone className="text-[#FAF9FB] text-xl" />
            <p className="text-[24px] font-medium text-[#FAF9FB]">Edit</p>
          </button>

          <button className="bg-transparent px-6.25 rounded-lg border border-[#974FD0] flex gap-2 items-center h-12.5">
            <HiOutlineTrash className="text-[#974FD0] text-xl" />
            <p className="text-[24px] font-medium text-[#974FD0]">Delete</p>
          </button>
        </div>
      </div>

      <hr className="border-[#B8B6B6] h-o.5 w-270" />

      <div className="flex flex-col gap-3 items-start px-3">
        <p className="text-left text-[35px] font-normal leading-[100%] text-[#292929]">
          FinTech Website Update
        </p>
        <p className="text-left text-[24px] font-normal leading-[100%] text-[#737171]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
          nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
          faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
          tellus suspendisse et viverra.
        </p>
      </div>
    </div>
  );
};

export default ContentBox;
