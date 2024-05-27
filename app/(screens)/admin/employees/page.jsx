import Table from "@/app/components/tableSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import filterIcon from "@/app/assets/icons/filter.png";
import searchIcon from "@/app/assets/icons/search.png";

export const metadata = {
  title: {
    default: "Employees",
  },
};
function EmployeesPage() {
  return (
    <div className="flex flex-col gap-4 mt-6">
      <div className="flex gap-2 justify-between">
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
        <Link
          href="/sign_up"
          className="py-2 px-5 rounded-3xl bg-red-500 text-white w-fit sticky top-0 font-semibold"
        >
          Add Employee
        </Link>
      </div>
      <Table head="Employees" />
    </div>
  );
}

export default EmployeesPage;
