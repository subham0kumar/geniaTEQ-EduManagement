import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStudentData } from "../../../context/context";
import { Percent, PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const AddStudentsForm = ({ open, setOpen }) => {
  const { addStudent } = useStudentData();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[90vw] rounded-xl md:w-[425px]">
        <form
          onSubmit={(e) => {
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

            addStudent(fromValues);
            setOpen(false);
          }}
        >
          <DialogHeader>
            <DialogTitle>Create Student profile</DialogTitle>
            <DialogDescription>
              Create a new student with the following details
            </DialogDescription>
            <Separator />
          </DialogHeader>
          <div className="grid gap-4 py-4 place-content-center">
            {/* ------------Name------------ */}

            <div className="grid grid-cols-2 items-center md:grid-cols-4 md:w-96 md:px-4 gap-y-2 gap-x-4">
              <Label htmlFor="name" className="text-left">
                Name
              </Label>
              <Input
                required
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
              Add Student
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddStudentsForm;
