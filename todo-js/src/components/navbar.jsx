import React from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <>
      <div className="navbar  shadow shadow-muted-foreground     ">
        <Button variant={"navbar"} className="">
          NavIcon
        </Button>

        <div className=" flex ml-auto  space-x-6  mr-4">
          <Button variant={"ghost"}> link1 </Button>
          <Button variant={"ghost"}> link2 </Button>
          <Button variant={"ghost"}> link3 </Button>
          <Button variant={"ghost"}> link4 </Button>
        </div>
      </div>
    </>
  );
}
