import { Bell, Settings2, University } from "lucide-react";
import DropdownMenuCheckboxes from "../util/DropDownMenu";

const Navbar = () => {
  return (
    <nav className="border-b-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <span className="cursor-pointer flex items-end justify-between gap-2">
          <University
            size={40}
            className="border p-1 rounded-lg border-foreground"
          />
          <h2 className="md:block hidden text-2xl font-bold">EduManager</h2>
        </span>
        <span className="cursor-pointer flex items-center justify-between gap-x-4 md:gap-x-6">
          <Bell className="size-8 border p-1 rounded-lg bg-gray-100" />
          <Settings2 className="size-8 border p-1 rounded-lg bg-gray-100" />
          <DropdownMenuCheckboxes />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
