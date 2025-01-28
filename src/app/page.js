  import Navbar from "@/components/global/navbar";
import StudentCard from "@/components/global/StudentCard";
import DashboardCard from "@/components/global/util/DashboardCard";
import { Separator } from "@/components/ui/separator";
import { DASHBOARD_INFO, STUDENTS_INFO } from "@/constants/constants";
import { Search } from "lucide-react";

const Home = () => {
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
            <DashboardCard key={info.name} {...info} />
          ))}
        </div>
      </div>
      <main className="max-w-7xl mx-auto p-10">
        <div className="flex items-center justify-between my-6">
          <h3 className="text-xl font-bold">Student List</h3>
          <span className="flex items-center gap-2 w-1/3 max-w-xl rounded-md border border-gray-500 p-2">
            <Search className="text-gray-500" />
            <input
              type="text"
              placeholder="Search students..."
              className="outline-none border-none w-2/3"
            />
          </span>
        </div>
        <Separator />
        <div className="grid gap-4 my-6">
          {STUDENTS_INFO.map((student) => (
            <StudentCard key={student.id} {...student} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
