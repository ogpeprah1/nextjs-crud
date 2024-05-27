import InfoCard from "@/app/components/InfoCard";
import Table from "@/app/components/tableSection";
import React from "react";

function DashboardPage() {
  const Info = [
    {
      title: "Number of Employees",
      value: 10,
      url: "/admin/employees",
    },
    {
      title: "Number of Leave Applications",
      value: 0,
      url: "/admin/leave_requests",
    },
    {
      title: "Number of Departments",
      value: 10,
      url: "/admin/departments",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex gap-3">
        {Info.map((i) => (
          <InfoCard key={i.title} title={i.title} value={i.value} url={i.url} />
        ))}
      </div>
      <Table head="Employees" />
    </div>
  );
}

export default DashboardPage;
