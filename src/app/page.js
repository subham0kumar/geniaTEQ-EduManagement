"use client";
import AddStudentsForm from "@/components/global/AddStudentsForm";
import Navbar from "@/components/global/navbar";
import StudentCard from "@/components/global/StudentCard";
import DashboardCard from "@/components/global/util/DashboardCard";
import { Separator } from "@/components/ui/separator";
import { DASHBOARD_INFO } from "@/constants/constants";
import { PlusCircle, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useStudentData } from "../../context/context";
import { Button } from "@/components/ui/button";

const Home = () => {
  const { loading, students, fetchStudents } = useStudentData();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, [students.length]);

  let percentage = 0;
  students
    .map((student) => {
      return student.attendance;
    })
    .forEach((x) => {
      percentage += x;
    });

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-10">
        <header className="mb-10">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-500">
            Manage your students and track their progress
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {DASHBOARD_INFO.map((info) => (
            <DashboardCard
              key={info.name}
              {...info}
              student_count={students.length}
              attendance_rate={Math.floor(percentage / students.length)}
            />
          ))}
        </div>
      </div>
      <main className="max-w-7xl mx-auto p-10">
        <div className="flex flex-col sm:flex-row gap-2 items-center justify-between my-6">
          <h3 className="text-2xl font-bold">Student List</h3>
          <span className="flex flex-col md:flex-row items-center justify-end gap-4 w-full md:w-1/2">
            <Button
              className="flex items-center gap-2 py-5"
              onClick={() => setOpen(true)}
            >
              <PlusCircle />
              Add Student
            </Button>
            <AddStudentsForm open={open} setOpen={setOpen} />
            <span className="flex items-center gap-2 w-full rounded-md border border-gray-500 p-2">
              <Search className="text-gray-500" />
              <input
                type="text"
                placeholder="Search students..."
                className="outline-none border-none w-2/3"
              />
            </span>
          </span>
        </div>
        <Separator />
        <div className="grid gap-4 my-6">
          {loading
            ? "Loading..."
            : students?.map(
                (student) => <StudentCard key={student.id} {...student} />
                // console.log(student)
              )}
        </div>
      </main>
    </div>
  );
};

export default Home;
