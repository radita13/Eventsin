import Toaster from "@/components/ui/Toaster";
import { cn } from "@/utils/cn";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface PropsTypes {
  children: React.ReactNode;
}

const Appshell = (props: PropsTypes) => {
  const { children } = props;
  return (
    <main className={cn(poppins.className)}>
      {children}
      <Toaster />
    </main>
  );
};

export default Appshell;
