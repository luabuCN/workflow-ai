import { TaskParamType, TaskType } from "@/types/task";
import { CodeIcon, GlobeIcon, type LucideProps } from "lucide-react";

export const PageToHtml = {
  type: TaskType.PAGE_TO_HTML,
  label: "从页面获取HTML",
  icon: (props: LucideProps) => (
    <CodeIcon className=" stroke-pink-400" {...props} />
  ),
  isEntryPoint: true,
  inputs: [
    {
      name: "网页",
      type: TaskParamType.BROWSER_INSTANCE,
      required: true,
    },
  ],
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
};
