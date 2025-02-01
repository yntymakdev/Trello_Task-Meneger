import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "./logoipsum-296.svg";
// const headingFont = localFont({
//   src: "/fonts/GeistMonoVF.woff",
// });

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <div className="hover:opacity-75 transition items-center gap-x-2  flex items-center">
          <Image src={logo} alt="logo" height={30} width={30} />
          <p className="text-lg text-neutral-700 pb-1">YNTY</p>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
