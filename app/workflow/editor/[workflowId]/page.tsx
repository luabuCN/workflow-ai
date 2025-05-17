import { auth } from "@/lib/auth";
import { waitFor } from "@/lib/helper/waitFor";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";
import Editor from "@/app/workflow/_components/Editor";
import React from "react";

async function EditorPage({ params }: { params: { workflowId: string } }) {
  const { workflowId } = params;
  const session = await auth.api.getSession({
    headers: headers(),
  });
  if (!session?.user.id) return <div>用户未认证或会话无效</div>;
  const workflow = await prisma.workflow.findUnique({
    where: {
      id: workflowId,
      userId: session?.user.id,
    },
  });

  if (!workflow) return <div>workflow not found</div>;

  return <Editor workdlow={workflow} />;
}

export default EditorPage;
