import Image from "next/image";
import React from "react";

function Card({ icon, head, value, percent }) {
  return (
    <div className="p-4 rounded-lg border flex flex-col gap-3 shadow-md">
      <div className="flex justify-between gap-7">
        <div className="border flex items-center justify-center p-2 rounded-lg">
          <Image src={icon} width={20} />
        </div>
        <p>{percent}% vs last month</p>
      </div>
      <p className="font-semibold">{head}</p>
      <h3 className="font-bold text-3xl">{value}</h3>
    </div>
  );
}

export default Card;
