import Link from "next/link";
import React from "react";

function InfoCard({ title, value, url }) {
  return (
    <div className="bg-gray-800 rounded-md w-1/3 py-7 px-5 flex items-center gap-4 justify-center">
      <div className="flex flex-col justify-between h-full gap-3 w-2/3">
        <h2 className=" text-2xl font-extrabold text-white text-wrap w-full">
          {title}
        </h2>
        <Link href={url} className="text-red-300 mt-auto">
          details..
        </Link>
      </div>
      <div className="w-1/5">
        <h2 className="text-7xl font-extrabold text-white text-wrap w-full text-right">
          {value}
        </h2>
      </div>
    </div>
  );
}

export default InfoCard;
