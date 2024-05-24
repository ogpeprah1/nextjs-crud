import React from "react";
export const metadata = {
  title: {
    default: "Departments",
  },
};
function DepartmentPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className=" h-fit p-5 bg-gray-800 shadow-md flex flex-col gap-5">
        <h2 className="text-3xl font-extrabold text-white  text-wrap w-full">
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
      </div>
      <div className="bg-gray-800 h-full shadow-lg p-5 ">
        <h2 className="text-3xl h-[100vh] font-extrabold text-white  text-wrap w-full">
          Departments
        </h2>
        <p>table</p>
      </div>
    </div>
  );
}

export default DepartmentPage;
