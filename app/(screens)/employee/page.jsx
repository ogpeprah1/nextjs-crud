import InfoCard from "@/app/components/InfoCard";
import Table from "@/app/components/tableSection";
import React from "react";

function EmpDashboardPage() {
  const Info = [
    {
      title: "Number of Approved Leave Appplications",
      value: 1,
      url: "/admin/employees",
    },
    {
      title: "Number of Rejected Leave Applications",
      value: 2,
      url: "/admin/leave_requests",
    },
    {
      title: "Number of Pending Leave Appplications",
      value: 3,
      url: "/admin/departments",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex gap-3 mt-6">
        {Info.map((i) => (
          <InfoCard key={i.title} title={i.title} value={i.value} url={i.url} />
        ))}
      </div>
      <Table head="Leave Applications" />
    </div>
  );
}

export default EmpDashboardPage;
