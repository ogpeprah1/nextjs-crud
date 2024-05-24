import InfoCard from "@/app/components/InfoCard";
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
    <div>
      <div className="w-full flex gap-3 mt-6">
        {Info.map((i) => (
          <InfoCard key={i.title} title={i.title} value={i.value} url={i.url} />
        ))}
      </div>
      <div className="mt-6">table</div>
    </div>
  );
}

export default DashboardPage;
