"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { DeleteWorkflow } from "@/actions/workflows/deleteWorkflow";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  workflowName: string;
  workflowId: string;
}

function DeleteWorkflowDialog({
  open,
  setOpen,
  workflowId,
  workflowName,
}: Props) {
  const [confirmText, setConfirmText] = useState("");
  const deleteMutation = useMutation({
    mutationFn: DeleteWorkflow,
    onSuccess: () => {
      toast.success("工作流删除成功", { id: workflowId, duration: 2000 });
      setConfirmText("");
    },
    onError: () => {
      toast.error("出错了！", { id: workflowId });
    },
  });
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>你确定要这样做吗？</AlertDialogTitle>
          <AlertDialogDescription>
            如果删除此工作流，您将无法恢复它。
            <div className="flex flex-col py-4 gap-2">
              <p>
                如果您确定要删除，请输入{" "}
                <strong className="text-black">{workflowName}</strong> 以确认：
              </p>
              <Input
                className="mt-2"
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
              />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setConfirmText("")}>
            取消
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={confirmText !== workflowName || deleteMutation.isPending}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            onClick={() => {
              toast.loading("正在删除工作流...", { id: workflowId });
              deleteMutation.mutate(workflowId);
            }}
          >
            删除
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteWorkflowDialog;
