"use client";
import useMobileSidebar from "@/hooks/use-mobile-sidebar";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const MobileSideBar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const onOpen = useMobileSidebar(state.onOpen);
  const onClose = useMobileSidebar(state.onClose);
  const isOpen = useMobileSidebar(state.isOpen);

  return <div>MobileSideBar</div>;
};

export default MobileSideBar;
