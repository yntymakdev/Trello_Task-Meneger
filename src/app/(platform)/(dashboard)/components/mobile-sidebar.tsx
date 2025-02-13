"use client";
import { Button } from "@/app/shared/components/styles/ui/Button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import SideBar from "./sidebar";
import useMobileSidebar from "@/hooks/use-mobile-sidebar";

const MobileSideBar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);
  const isOpen = useMobileSidebar((state) => state.isOpen);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <Button onClick={onOpen} className="block md:hidden mr-2" variant="ghost" size="sm">
        <Menu className="h-4 w-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-2 pt-10">
          <SheetTitle>
            <span className="sr-only">Mobile Sidebar</span>
          </SheetTitle>
          <SideBar storageKey="t-sidebar-mobile-state" />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSideBar;
