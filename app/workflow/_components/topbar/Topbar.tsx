"use client";

import TooltipWrapper from "@/components/tooltip-wrapper";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import SaveBtn from "./SaveBtn";

interface Props {
  title: string;
  subtitle?: string;
  workflowId: string;
}

function Topbar({ title, subtitle, workflowId }: Props) {
  const router = useRouter();
  return (
    <header className="flex p-2 border-p-2 border-separate justify-between w-full h-[60px] sticky top-0 bg-background border-b-2">
      <div className="flex gap-1 flex-1">
        <TooltipWrapper content="返回">
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => router.back()}
          >
            <ChevronLeftIcon size={20} />
          </Button>
        </TooltipWrapper>
        <div>
          <p className="font-bold text-ellipsis truncate">{title}</p>
          {subtitle && (
            <p className="text-xs text-muted-foreground truncate text-ellipsis">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-1 flex-1 justify-end">
        <SaveBtn workflowId={workflowId} />
      </div>
    </header>
  );
}

export default Topbar;
