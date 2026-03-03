import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

const Home = () => {
  return (
    //text-light-500 is a custom color defined in tailwind.config.js
    <>
      <h1 className="h1-bold">Welcome to nextjs 👋</h1>
    </>
  );
};

export default Home;
