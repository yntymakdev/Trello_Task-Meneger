import React from "react";
import Navbar from "./components/navbar";
import { ClerkProvider } from "@clerk/nextjs";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default DashBoardLayout;
