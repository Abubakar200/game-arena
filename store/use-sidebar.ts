import { create } from "zustand";

interface SidebarProps {
  collapsed: boolean;
  onExpand: () => void;
  onCollapsed: () => void;
}

export const useSidebar = create<SidebarProps>((set) => ({
  collapsed: false,
  onExpand: () => set(() => ({ collapsed: false })),
  onCollapsed: () => set(() => ({ collapsed: true })),
}));
