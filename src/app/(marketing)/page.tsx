import React from "react";
import { Button } from "../shared/components/styles/ui/Button";
import Link from "next/link";
import { Medal, Weight } from "lucide-react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const headingFont = localFont({
  src: "../fonts/GeistMonoVF.woff",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center flex-col">
      <div className={cn("flex items-center justify-center flex-col", headingFont.className)}>
        <div className="mb-4 flex items-center border show-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          Тайм менеджмент !)
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-natural-800 mb-6"></h1>
        <h1 className="text-3xl">Добро пожаловать !</h1>
        <br />
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-zinc-50 px-4 p-2 rounded-md pb-4 w-fit">
          TASK MANEGER
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-natural-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Taskify – это современное и интуитивно понятное приложение для планирования, организации и контроля выполнения
        задач !
      </div>
      <br />
      <Button>
        <Link href="/sign-in">Get task tastify for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
