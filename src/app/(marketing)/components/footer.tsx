import Logo from "@/app/shared/components/styles/Logo";
import { Button } from "@/app/shared/components/styles/ui/Button";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full  p4 border-t bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between ">
        <Logo />
        <div className="flex space-x-2 md:flex-row flex-col items-center md:w-auto w-full ">
          <Button size="sm" variant="ghost" className="ml-auto lg:ml-0">
            Зашищено авторискими правами ©YNTY
          </Button>
          <Button className=" hidden md:flex" size="sm" variant="ghost">
            Yntymak Kubancyhev
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
