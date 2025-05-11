"use client";
import React, { useState } from "react";
import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  MenuIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import Logo from "./Logo";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
const routes = [
  {
    href: "dashboard",
    label: "首页",
    icon: HomeIcon,
  },
  {
    href: "dashboard/workflows",
    label: "工作流",
    icon: Layers2Icon,
  },
  {
    href: "dashboard/credentials",
    label: "凭证",
    icon: ShieldCheckIcon,
  },
  {
    href: "dashboard/billing",
    label: "账单",
    icon: CoinsIcon,
  },
];

export function DesktopSidebar() {
  const pathname = usePathname();
  const activeRoute =
    routes.find((route) => pathname === `/${route.href}`) || routes[0];

  return (
    <div className="hidden relative md:block min-w-[280px] max-w-[280px] h-screen overflow-hidden w-full bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate">
      <div className="flex-items-center justify-center gap-2 border-b-[1px] border-separate p-2 h-[60px]">
        <Logo />
      </div>
      <div className="flex flex-col p-2 gap-1">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={`/${route.href}`}
            className={buttonVariants({
              variant:
                activeRoute.href === route.href
                  ? "sidebarActiveItem"
                  : "sidebarItem",
            })}
          >
            <route.icon size={20} />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  // 移动端同样使用精确匹配
  const activeRoute =
    routes.find((route) => pathname === `/${route.href}`) || routes[0];

  return (
    <div className="block border-separate bg-background md:hidden">
      <nav className="flex items-center px-2">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-[400px] sm:w-[540px] space-y-4"
            side="left"
          >
            <Logo />
            <div className="flex flex-col gap-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={`/${route.href}`}
                  className={buttonVariants({
                    variant:
                      activeRoute.href === route.href
                        ? "sidebarActiveItem"
                        : "sidebarItem",
                  })}
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <route.icon size={20} />
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
