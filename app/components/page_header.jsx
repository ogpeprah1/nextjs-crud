import React from "react";

function PageHeader({ headerText }) {
  return (
    <div className="flex items-center justify-between  mb-4">
      <div className="flex flex-col justify-between gap-1">
        <h1 className="text-2xl font-semibold">{headerText}</h1>
        <p>Path.</p>
      </div>
      <div>
        <p>Date</p>
      </div>
    </div>
  );
}

export default PageHeader;
