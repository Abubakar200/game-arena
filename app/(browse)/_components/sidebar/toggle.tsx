"use client";

import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

const Toggle = () => {
  const { collapsed, onCollapsed, onExpand } = useSidebar((state) => state);
  const label = collapsed ? "Expand" : "Collapse";
  return (
    <>
      {collapsed && (
        <div className="hidden lg:flex items-center justify-center w-full pt-4 mb-4 ">
            <Hint label={label} side="right" asChild>
          <Button variant="ghost" onClick={onExpand} className="h-auto p-2">
            <ArrowRightFromLine className="h-4 w-4" />
          </Button>
          </Hint>
        </div>
      )}
      {!collapsed && (
        <div className="flex items-center p-3 mb-2 pl-6 w-full">
          <p className="font-semibold text-primary">For you</p>
          <Hint label={label} side="right" asChild>
            <Button
              onClick={onCollapsed}
              variant="ghost"
              className="h-auto ml-auto p-2"
            >
              <ArrowLeftFromLine className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      )}
    </>
  );
};

export default Toggle;
