"use server";

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import {
  createWorkflowSchema,
  createWorkflowSchemaType,
} from "@/schema/workflow";
import { WorkflowStatus } from "@/types/workflow";
import { headers } from "next/headers";
import { z } from "zod";

export async function CreateWorkflow(form: createWorkflowSchemaType) {
  const { success, data } = createWorkflowSchema.safeParse(form);
  if (!success) {
    throw new Error("Invalid form");
  }
  const session = await auth.api.getSession({
    headers: headers(),
  });
  if (!session) {
    throw new Error("未登录");
  }

  const result = await prisma.workflow.create({
    data: {
      userId: session.user.id,
      status: WorkflowStatus.DRAFT,
      definition: "TODO",
      ...data,
    },
  });
  if (!result) {
    throw new Error("创建失败");
  }

  redirect(`/workflow/editor/${result.id}`);
}
