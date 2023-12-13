import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
const Logo = () => {
  return(
    <div className="flex flex-col items-center gap-y-4">
        <div className="bg-white rounded-full p-1">
            <Image
            src='/spooky.svg'
            alt="Game Arena"
            height={80}
            width={80}
            />
        </div>
        <div className={cn(
            "flex items-center flex-col",
            font.className
        )}>
            <p className="text-xl font-semibold">Game Arena</p>
            <p className="text-sm text-muted-foreground">Let&apos;s play</p>
        </div>
    </div>
  )
};

export default Logo;
