import Logo from "@/app/shared/components/styles/Logo";
import { Button } from "@/app/shared/components/styles/ui/Button";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:flex md:space-x-2">
          {" "}
          <Button className="sm" variant="outline" asChild>
            <Link href="/sign-in">Войти</Link>
          </Button>
          <Button className="sm" variant="outline" asChild>
            <Link href="/sign-up">Регистрация</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
