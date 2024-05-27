import Table from "@/app/components/tableSection";
import React from "react";
export const metadata = {
  title: {
    default: "Leave Requests",
  },
};
function LeaveRequests() {
  return (
    <div className="flex flex-col gap-4">
      <Table head="Leave Requests" />
    </div>
  );
}

export default LeaveRequests;
