import AvatarDrop from "@/components/AvatarDrop";
import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import { DesktopSidebar } from "@/components/Sidebar";
import { ModeToggle } from "@/components/ThemeModelToggle";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { Toaster } from "@/components/ui/sonner";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <DesktopSidebar />
      <div className="flex flex-col flex-1 min-h-screen">
        <header className="flex items-center justify-between px-3 py-4 h-[60px] container">
          <BreadcrumbHeader />
          <div className="gap-4 flex items-center">
            <ModeToggle />
            <AvatarDrop />
          </div>
        </header>
        <Separator />
        <div className="overflow-auto">
          <div className="flex-1 container px-2 py-4 text-accent-foreground">
            {children}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default layout;
