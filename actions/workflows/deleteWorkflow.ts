"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

import { headers } from "next/headers";

export async function DeleteWorkflow(id: string) {
  //获取Better Auth  登录后的用户信息id
  const session = await auth.api.getSession({
    headers: headers(),
  });

  if (!session) {
    throw new Error("未登录");
  }
  await prisma.workflow.delete({
    where: {
      id,
      userId: session.user.id,
    },
  });
  revalidatePath("/workflows");
}
