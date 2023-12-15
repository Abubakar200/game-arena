"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

interface WrapperPros {
  children: React.ReactNode;
}
const Wrapper = ({ children }: WrapperPros) => {
  const { collapsed } = useSidebar((state) => state);

  return (
    <aside
      className={cn(
        "fixed h-full flex flex-col bg-background w-60 left-0 border-r border-[#2D2E35] z-50",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};

export default Wrapper;
