import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, CircleUserRound } from "lucide-react";

const DropDownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 border-foreground"
        >
          <CircleUserRound /> <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default DropDownMenu;
