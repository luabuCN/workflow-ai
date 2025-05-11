"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";

export async function GetWorkflowsForUser() {
  //获取Better Auth  登录后的用户信息id
  const session = await auth.api.getSession({
    headers: headers(),
  });
  console.log(session, "session");

  if (!session) {
    throw new Error("未登录");
  }
  // 查询用户并返回其工作流数组
  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
    include: {
      workflows: true,
    },
  });

  return user?.workflows || [];
}
