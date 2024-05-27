import Table from "@/app/components/tableSection";
import React from "react";
import filterIcon from "@/app/assets/icons/filter.png";
import Image from "next/image";

export const metadata = {
  title: {
    default: "Departments",
  },
};
function DepartmentPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className=" h-fit p-5 bg-slate-300 flex flex-col gap-5 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 rounded-lg">
        <h2 className="text-3xl font-extrabold text-gray-800  text-wrap w-full">
          Add Department
        </h2>
        <input
          type="text"
          placeholder="Department name"
          className="border-b py-3 text-white border-b-gray-300 bg-transparent focus:outline-none"
        />
        <div>
          <button
            type="button"
            className="py-1 px-5 bg-green-500 text-white font-semibold rounded-md"
          >
            Save
          </button>
          <button
            type="button"
            className="ml-3  py-1 px-5 bg-red-500 text-white font-semibold rounded-md"
          >
            Cancel
          </button>
        </div>
        <div className="w-[80%] flex gap-3">
          <input
            type="text"
            placeholder="Search"
            className="border p-2 w-[90%] rounded-xl focus:outline-none"
          />
          <button
            type="button"
            className="py-2 px-5 rounded-3xl bg-white w-fit flex items-center justify-center  font-semibold"
          >
            <Image src={filterIcon} className="w-5 h-5 mr-3" />
            Filter
          </button>
        </div>
        <Table head="Departments" />
      </div>
    </div>
  );
}

export default DepartmentPage;
