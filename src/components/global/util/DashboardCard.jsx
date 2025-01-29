import React from "react";

const DashboardCard = ({ student_count, attendance_rate, ...info }) => {
  let value;
  switch (info.name) {
    case "Total Students":
      value = student_count;
      break;
    case "Attendance Rate":
      value = `${attendance_rate}%`;
      break;
    case "Courses":
      value = info.value;
      break;
    case "Graduates":
      value = info.value;
      break;
    default:
      value = info.value;
  }
  return (
    <div className="flex items-center gap-4 border border-foreground p-4 rounded-lg">
      <div className="border-foreground border bg-gray-200 p-1 rounded-md">
        {info.icon}
      </div>
      <span>
        <h3 className="">{info.name}</h3>
        <h1 className="text-2xl font-semibold truncate">{value}</h1>
      </span>
    </div>
  );
};

export default DashboardCard;
