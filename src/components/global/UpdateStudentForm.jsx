import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Percent } from "lucide-react";
import { useStudentData } from "../../../context/context";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Separator } from "../ui/separator";

const UpdateStudentsForm = ({ id, open, setOpen }) => {
  const { updateStudent, loader, fetchStudentById, student } = useStudentData();
  const handleSubmit = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const fromValues = {
      name: fromData.get("name"),
      email: fromData.get("email"),
      age: fromData.get("age"),
      attendance: fromData.get("attendance"),
      performance: fromData.get("performance"),
      grade: fromData.get("grade"),
    };

    updateStudent(id, fromValues);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {loader
        ? "loading..."
        : student.map((x) => (
            <DialogContent
              key={x.id}
              className="w-[90vw] rounded-xl md:w-[425px]"
            >
              <form onSubmit={handleSubmit}>
                <DialogHeader>
                  <DialogTitle>Update Student profile</DialogTitle>
                  <DialogDescription>
                    Update existing student data with the following details
                  </DialogDescription>
                  <Separator />
                </DialogHeader>
                <div className="grid gap-4 py-4 place-content-center">
                  {/* ------------Name------------ */}

                  <div className="grid grid-cols-2 items-center md:grid-cols-4 md:w-96 md:px-4 gap-y-2 gap-x-4">
                    <p>ID</p>
                    <p>{x.id}</p>
                  </div>
                  <div className="grid grid-cols-2 items-center md:grid-cols-4 md:w-96 md:px-4 gap-y-2 gap-x-4">
                    <Label htmlFor="name" className="text-left">
                      Name
                    </Label>
                    <Input
                      required
                      defaultValue={x.name}
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      type="text"
                      className="col-span-3"
                    />
                  </div>

                  {/* -------------Email------------ */}
                  <div className="grid grid-cols-2 items-center md:grid-cols-4 md:w-96 md:px-4 gap-y-2 gap-x-4">
                    <Label htmlFor="email" className="text-left">
                      Email
                    </Label>
                    <Input
                      required
                      defaultValue={x.email}
                      id="email"
                      name="email"
                      placeholder="example@me.com"
                      type="email"
                      className="col-span-3"
                    />
                  </div>

                  {/* -------------AGE------------ */}
                  <div className="grid grid-cols-2 items-center md:grid-cols-4 md:w-96 md:px-4 gap-y-2 gap-x-4">
                    <Label htmlFor="age" className="text-left">
                      Age
                    </Label>
                    <Input
                      required
                      defaultValue={x.age}
                      id="age"
                      name="age"
                      placeholder="18"
                      type="number"
                      className="col-span-3"
                    />
                  </div>

                  {/* -------------Attendance ------------- */}
                  <div className="grid grid-cols-2 items-center md:grid-cols-4 md:w-96 md:px-4 gap-y-2 gap-x-4">
                    <Label htmlFor="attendance" className="text-left">
                      Attendance
                    </Label>
                    <span className="col-span-3 flex items-center justify-center border shadow-sm rounded-lg">
                      <Input
                        required
                        defaultValue={x.attendance}
                        id="attendance"
                        name="attendance"
                        placeholder="John Doe"
                        type="number"
                        className="border-none shadow-none"
                      />
                      <Percent className="mx-2 text-gray-400" />
                    </span>
                  </div>

                  {/* -------------Grade ------------- */}
                  <div className="grid grid-cols-2 items-center md:grid-cols-4 md:w-96 md:px-4 gap-y-2 gap-x-4">
                    <Label htmlFor="grade" className="text-left">
                      Grade
                    </Label>
                    <Input
                      required
                      defaultValue={x.grade}
                      id="grade"
                      name="grade"
                      placeholder="10th"
                      type="number"
                      className="col-span-3"
                    />
                  </div>

                  {/* -------------Performance ------------- */}
                  <div className="grid grid-cols-2 items-center md:grid-cols-4 md:w-96 md:px-4 gap-y-2 gap-x-4">
                    <Label htmlFor="performance" className="text-left">
                      Performance
                    </Label>
                    <Input
                      required
                      defaultValue={x.performance}
                      id="performance"
                      name="performance"
                      placeholder="A+"
                      type="text"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter className="md:w-96 md:px-4">
                  <Button className="w-full" type="submit">
                    Update Student
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          ))}
    </Dialog>
  );
};

export default UpdateStudentsForm;
