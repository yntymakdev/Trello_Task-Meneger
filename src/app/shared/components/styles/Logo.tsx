import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const headingFont = localFont({
  src: "../fonts/GeistMonoVF.woff",
});

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <div className="hover:opacity-75 transition items-center gap-x-2 hidden  md:flex    "></div>
        <Image src="/logoipsum.svg" alt="logo" height={30} width={30} />
        <p className={cn("text-lg text-neutral-700 pb-1", headingFont.className)}>YNTY</p>
      </Link>
    </div>
  );
};

export default Logo;
