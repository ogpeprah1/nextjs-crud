import Link from "next/link";
import React from "react";

function InfoCard({ title, value, url }) {
  return (
    <div className="rounded-md w-1/3 py-7 px-5 flex items-center gap-4 justify-center h-fit p-5 bg-slate-300  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200">
      <div className="flex flex-col justify-between h-full gap-3 w-2/3">
        <h2 className=" text-[1.4rem] font-extrabold text-gray-800 text-wrap w-full">
          {title}
        </h2>
        <Link href={url} className="text-blue-400 py-1 px-5 rounded-2xl w-fit font-semibold bg-white mt-auto">
          details..
        </Link>
      </div>
      <div className="w-1/5">
        <h2 className="text-7xl font-extrabold text-gray-800 text-wrap w-full text-right">
          {value}
        </h2>
      </div>
    </div>
  );
}

export default InfoCard;
