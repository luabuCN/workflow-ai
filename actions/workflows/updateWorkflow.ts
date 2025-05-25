"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { WorkflowStatus } from "@/types/workflow";
import { headers } from "next/headers";

export async function UpdateWorkflow({
  id,
  definition,
}: {
  id: string;
  definition: string;
}) {
  //获取Better Auth  登录后的用户信息id
  const session = await auth.api.getSession({
    headers: headers(),
  });

  if (!session) {
    throw new Error("未登录");
  }

  const workflow = await prisma.workflow.findUnique({
    where: {
      id,
      userId: session.user.id,
    },
  });
  if (!workflow) throw new Error("工作流不存在");
  if (workflow.status !== WorkflowStatus.DRAFT)
    throw new Error("工作流不是草稿");

  await prisma.workflow.update({
    where: {
      id,
      userId: session.user.id,
    },
    data: {
      definition,
    },
  });
}
