import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ThemeModelToggle";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { Toaster } from "@/components/ui/sonner";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full h-screen">
      {children}
      <Separator />
      <footer className="flex items-center justify-between p-2">
        <Logo iconSize={16} fontSize="text-xl" />
        <ModeToggle />
      </footer>
      <Toaster />
    </div>
  );
}

export default layout;
