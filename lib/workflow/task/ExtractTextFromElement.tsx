import { TextIcon, type LucideProps } from "lucide-react";

import { TaskParamType, TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";

export const ExtractTextFromElementTask = {
  type: TaskType.EXTRACT_TEXT_FROM_ELEMENT,
  label: "从元素中提取文本",
  icon: (props: LucideProps) => (
    <TextIcon className="stroke-rose-400" {...props} />
  ),
  isEntryPoint: false,
  credits: 2,
  inputs: [
    { 
      name: "HTML内容",
      type: TaskParamType.STRING,
      required: true,
      variant: "textarea",
    },
    {
      name: "选择器",
      type: TaskParamType.STRING,
      required: true,
    },
  ] as const,
  outputs: [
    {
      name: "提取的文本",
      type: TaskParamType.STRING,
    },
  ] as const,
} satisfies WorkflowTask
