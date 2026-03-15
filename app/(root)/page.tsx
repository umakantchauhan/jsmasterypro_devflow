import { auth, signOut } from "@/auth"; //signout from @/auth becuse we are using this on the server side
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
import ROUTES from "@/constants/routes";
import React from "react";

const Home = async () => {
  const session = await auth();
  return (
    //text-light-500 is a custom color defined in tailwind.config.js
    <>
      <h1 className="h1-bold">Welcome to nextjs 👋</h1>
      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <button type="submit">Log out</button>
      </form>
    </>
  );
};

export default Home;
