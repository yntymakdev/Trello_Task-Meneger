import React from "react";

export type Organization{

    id: string
    slug: string
    imageUrl: string
    name: string
}
interface NavItemProps {
  isExpanded: boolean;
  isActive: boolean;
  organization: Organization;
  onExpand: (id: string) => void;
}
const NavItem = ({ isExpanded, isActive, organization, onExpand }:  NavItemProps) => {
  return <div>Nav Item</div>;
};

export default NavItem;
