import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { useLocalStorage } from "usehooks-ts";
import React, { use } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/app/shared/components/styles/ui/Button";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import NavItem, { Organization } from "./nav-item";

interface SideBarProps {
  storageKey?: string;
}

const SideBar = ({ storageKey = "t-sidebar-state" }: SideBarProps) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(storageKey, {});

  const { organization: activeOrganization, isLoaded: isLoadedOrg } = useOrganization();
  const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({ userMemberships: { infinite: true } });
  const defaultAccordionValue: string[] = Object.keys(expanded).reduce((acc: string[], key: string) => {
    if (expanded[key]) {
      acc.push(key);
    }
    return acc;
  }, []);

  const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }));

    if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
      return (
        <>
          <Skeleton />
        </>
      );
    }
  };

  return (
    <div className="flex flex-col font-medium text-xs mb-1">
      <span style={{ position: "relative", top: "20px" }} className="pl-3  ">
        WorkSpaces
      </span>
      <Button asChild type="button" size="icon" variant="ghost" className="ml-auto">
        <Link href="/select-org">
          <Plus className="h-4 w-4 mb-2" />
        </Link>
      </Button>
      <Accordion type="multiple" defaultValue={defaultAccordionValue} className="space-y-2">
        {userMemberships.data?.map(({ organization }) => (
          <NavItem
            key={organization.id}
            isActive={activeOrganization?.id === organization.id}
            isExpanded={expanded[organization.id]}
            organization={organization as Organization}
            onExpand={onExpand}
          />
        ))}
      </Accordion>
    </div>
  );
};

export default SideBar;
