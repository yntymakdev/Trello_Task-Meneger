import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { useLocalStorage } from "usehooks-ts";
import React from "react";

interface SideBarProps {
  storageKey?: string;
}

const SideBar = ({ storageKey = "t-sidebar-state" }: SideBarProps) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(storageKey, {});

  const { organization: activeOrganization, isLoaded: isLoadedOrg } = useOrganization();
  const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({ userMemberships: { infinite: true } }); //
  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(acc: string[], key: string)=> {

    if(expanded)
  };
  return <div>sidebar</div>;
};

export default SideBar;
