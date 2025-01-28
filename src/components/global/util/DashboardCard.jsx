import React from "react";

const DashboardCard = ({ ...info }) => {
  return (
    <div className="flex items-center gap-4 border border-foreground p-4 rounded-lg">
      <div className="border-foreground border bg-gray-200 p-1 rounded-md">
        {info.icon}
      </div>
      <span>
        <h3 className="">{info.name}</h3>
        <h1 className="text-2xl font-semibold">{info.value}</h1>
      </span>
    </div>
  );
};

export default DashboardCard;
