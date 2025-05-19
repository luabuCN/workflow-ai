"use client";

import { useEffect, useId, useState } from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { TaskParam } from "@/types/task";
import type { ParamProps } from "@/types/appNode";

export default function StringParam({
  param,
  value,
  updateNodeParamValue,
}: ParamProps) {
  const id = useId();
  return (
    <div className="space-y-1 p-1 w-full">
      <Label htmlFor={id} className="text-xs flex">
        {param.name}
        {param.required && <p className="text-red-400 px-2">*</p>}
      </Label>
      <Input
        id={id}
        value={value}
        onChange={(e) => updateNodeParamValue(e.target.value)}
        placeholder="请在此输入"
      />
      {param.helperText && (
        <p className="text-muted-foreground px-2">{param.helperText}</p>
      )}
    </div>
  );
}
