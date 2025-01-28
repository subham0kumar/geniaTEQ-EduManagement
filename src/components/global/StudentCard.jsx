import React from "react";
import { Button } from "../ui/button";
import { Eye } from "lucide-react";

const getPerformanceColor = (performance) => {
  switch (performance[0]) {
    case "A":
      return "bg-green-100";
    case "B":
      return "bg-yellow-100";
    case "C":
      return "bg-orange-100";
    case "D":
      return "bg-red-100";
    case "F":
      return "bg-red-400";
    default:
      return "bg-gray-100";
  }
};

const StudentCard = ({ ...student }) => {
  return (
    <div className="flex sm:flex-row flex-col gap-4 border-2 rounded-lg p-4 justify-between items-start sm:items-center">
      <div className="flex items-center justify-center gap-4">
        <img
          src={student.img}
          alt={student.name}
          className="h-16 w-16 rounded-full"
        />
        <span className="flex flex-col gap-2">
          <h4 className="px-2 md:text-xl font-semibold truncate">
            {student.name}
          </h4>
          <span className="flex md:flex-row flex-col gap-2 font-semibold text-gray-700">
            <p className="bg-blue-100 px-2 text-center text-xs py-1 rounded-full">
              Class: {student.grade}
            </p>
            <p className="bg-gray-100 px-2 text-center text-xs py-1 rounded-full">
              Attendance: {student.attendance}
            </p>
            <p
              className={`${getPerformanceColor(
                student.performance
              )} px-2 text-center text-xs py-1 rounded-full`}
            >
              Performance: {student.performance}
            </p>
          </span>
        </span>
      </div>
      <Button className="sm:w-auto w-full">
        <Eye /> <h4>View Details</h4>
      </Button>
    </div>
  );
};

export default StudentCard;
