import Logo from "@/app/shared/components/styles/Logo";
import { Button } from "@/app/shared/components/styles/ui/Button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import React from "react";
import MobileSideBar from "./mobile-sidebar";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center justify-between">
      <div className="flex items-center gap-x-4">
        <MobileSideBar />
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button variant="primary" size="sm" className="rounded-sm hidden md:block h-auto py-1.5 px-2">
          Create
        </Button>
        <Button variant="primary" size="sm" className="rounded-sm block md:hidden">
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl="/organization/:id"
          appearance={{
            elements: {
              rootBox: { display: "flex", justifyContent: "center", alignItems: "center" },
            },
          }}
        />
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
