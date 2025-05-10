"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "./ui/breadcrumb";
import { MobileSidebar } from "./Sidebar";

function BreadcrumbHeader() {
  const pathName = usePathname();
  const paths = pathName.split("/").filter(Boolean);

  return (
    <div className="flex items-center flex-start">
      <MobileSidebar />
      {/* <Breadcrumb>
        <BreadcrumbList>
          {paths.map((path, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink className=" capitalize" href={`/${path}`}>
                  {path === "" ? "首页" : path}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb> */}
    </div>
  );
}

export default BreadcrumbHeader;
