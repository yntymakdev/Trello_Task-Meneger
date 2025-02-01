import React from "react";
import Navbar from "./components/navbar";
import { ClerkProvider } from "@clerk/nextjs";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      {/* <ClerkProvider> */}
      <Navbar />
      {children}
      {/* </ClerkProvider> */}
    </div>
  );
};

export default DashBoardLayout;
