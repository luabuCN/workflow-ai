"use client";

import { useReactFlow } from "@xyflow/react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { CheckIcon, Loader2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { UpdateWorkflow } from "@/actions/workflows/updateWorkflow";

export default function SaveBtn({ workflowId }: { workflowId: string }) {
  const { toObject } = useReactFlow();
  const saveMutation = useMutation({
    mutationFn: UpdateWorkflow,
    onSuccess: () => {
      toast.success("工作流保存成功", { id: "save-workflow" });
    },
    onError: () => {
      toast.error("出错了！", { id: "save-workflow" });
    },
  });
  return (
    <Button
      disabled={saveMutation.isPending}
      variant="outline"
      className="flex items-center gap-2"
      onClick={() => {
        const workflowDefinition = JSON.stringify(toObject());
        toast.loading("正在保存工作流...", { id: "save-workflow" });
        saveMutation.mutate({
          id: workflowId,
          definition: workflowDefinition,
        });
      }}
    >
      {saveMutation.isPending ? (
        <Loader2Icon size={16} className=" animate-spin stroke-primary" />
      ) : (
        <CheckIcon size={16} className="stroke-primary" />
      )}
      保存
    </Button>
  );
}
