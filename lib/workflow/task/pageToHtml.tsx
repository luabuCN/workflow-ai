import { TaskParamType, TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";
import { CodeIcon, GlobeIcon, type LucideProps } from "lucide-react";

export const PageToHtml = {
  type: TaskType.PAGE_TO_HTML,
  label: "从页面获取HTML",
  icon: (props: LucideProps) => (
    <CodeIcon className=" stroke-pink-400" {...props} />
  ),
  isEntryPoint: false,
  inputs: [
    {
      name: "网页",
      type: TaskParamType.BROWSER_INSTANCE,
      required: true,
    },
  ],
  credits: 2,
  outputs: [
    {
      name: "网页HTML",
      type: TaskParamType.STRING,
    },
    {
      name: "网页实例",
      type: TaskParamType.BROWSER_INSTANCE,
    },
  ] as const,
} satisfies WorkflowTask
