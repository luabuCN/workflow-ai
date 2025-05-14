import { GetWorkflowsForUser } from "@/actions/workflows/getWorkflowForUser";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { waitFor } from "@/lib/helper/waitFor";
import { AlertCircle, InboxIcon, Workflow } from "lucide-react";
import React, { Suspense } from "react";
import CreateWorkflowDialog from "./_components/create-workflow-dialog";
import WorkflowCard from "./_components/workflow-card";

function page() {
  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold font-serif flex gap-2 items-center h-[36px]">
            <Workflow className="stroke-primary" />
            工作流程
          </h1>
          <p className="text-muted-foreground">
            管理你的工作流程，创建自动化任务，提高工作效率。通过简单的配置，让AI为你完成重复性工作。
          </p>
        </div>
      </div>

      <div className="h-full py-6">
        <Suspense fallback={<UserWorkflowsSkeleton />}>
          <UserWorkflows />
        </Suspense>
      </div>
    </div>
  );
}

function UserWorkflowsSkeleton() {
  return (
    <div className="space-y-2">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-32 w-full" />
      ))}
    </div>
  );
}

async function UserWorkflows() {
  const workflows = await GetWorkflowsForUser();

  if (!workflows) {
    if (!workflows) {
      return (
        <Alert variant="destructive">
          <AlertCircle className="w-4 h-4" />
          <AlertTitle>错误</AlertTitle>
          <AlertDescription>出现了一些问题！请稍后再试。</AlertDescription>
        </Alert>
      );
    }
  }

  if (workflows.length === 0) {
    return (
      <div className="flex flex-col gap-4 h-full items-center justify-center">
        <div className="rounded-full bg-accent w-20 h-20 flex items-center justify-center">
          <InboxIcon size={40} className="stroke-primary" />
        </div>
        <div className="flex flex-col gap-1 text-center">
          <p className="font-bold font-sans">还没有创建工作流程</p>
          <p className="text-sm text-muted-foreground">
            点击下方按钮创建你的第一个工作流程
          </p>
        </div>
        <CreateWorkflowDialog triggerText="创建第一个工作流程" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {workflows.map((workflow) => (
        <WorkflowCard key={workflow.id} workflow={workflow} />
      ))}
    </div>
  );
}

export default page;
