import { Edit, Trash } from "lucide-react";
import { useStudentData } from "../../../context/context";
import { Button } from "../ui/button";

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
  const { deleteStudent, editStudent } = useStudentData();
  // const byteArray = new Uint8Array(student.profile_image.data);
  // const base64String = Buffer.from(byteArray).toString("base64");
  return (
    <div className="flex sm:flex-row flex-col gap-4 border-2 rounded-lg p-4 justify-between items-start sm:items-center">
      <div className="flex items-center justify-center gap-4">
        {/* <img
          src={
            student.profile_image.data
              ? `data:image/jpeg;base64,${base64String}`
              : ""
          }
          alt={student.name}
          className="h-16 w-16 rounded-full"
        /> */}
        <span className="flex flex-col gap-2">
          <h4 className="px-2 md:text-xl font-semibold truncate">
            {student.name}
          </h4>
          <span className="flex md:flex-row flex-col gap-2 font-semibold text-gray-700">
            <p className="bg-blue-100 px-2 text-center text-xs py-1 rounded-full">
              Class: {student.grade}
            </p>
            <p className="bg-gray-100 px-2 text-center text-xs py-1 rounded-full">
              Attendance: {student.attendance}%
            </p>
            <p className="bg-gray-100 px-2 text-center text-xs py-1 rounded-full">
              ID: {student.id}
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
      <span className="gap-4 flex-col flex md:flex-row md:w-1/3 w-full items-center justify-end">
        <Button
          className="sm:w-auto w-full bg-red-500" 
         
          onClick={() => deleteStudent(student.id)}
        >
          <Trash /> <h4>Delete Student</h4>
        </Button>
        <Button className="sm:w-auto w-full">
          <Edit /> <h4>Update Student</h4>
        </Button>
      </span>
    </div>
  );
};

export default StudentCard;
