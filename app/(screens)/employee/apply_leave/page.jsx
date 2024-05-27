import Table from "@/app/components/tableSection";
import React from "react";

export const metadata = {
  title: {
    default: "Apply Leave",
  },
};

function ApplyLeave() {
  return (
    <div>
      Apply Leave
      <Table head="Leave Requests" />
    </div>
  );
}

export default ApplyLeave;
