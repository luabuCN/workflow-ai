"use client";

import { usePathname } from "next/navigation";

import React from "react";
import { ModeToggle } from "./ThemeModelToggle";
import AvatarDrop from "./AvatarDrop";
import { useSession } from "@/lib/auth-client";
import { Button, buttonVariants } from "./ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function TopNav() {
  const pathname = usePathname();
  const { data, isPending } = useSession();

  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="hidden md:block">
          <nav className="flex items-center space-x-2">LOGO</nav>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          {isPending ? (
            <Loader2 size={16} className="animate-spin text-muted-foreground" />
          ) : (
            <>
              {data?.user ? (
                <AvatarDrop />
              ) : (
                <Link
                  className={cn(
                    buttonVariants({
                      variant: "default",
                      size: "sm",
                    })
                  )}
                  href="/signin"
                >
                  登录
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}
