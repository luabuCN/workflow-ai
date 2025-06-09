import { TaskParamType, TaskType } from "@/types/task";
import { GlobeIcon, type LucideProps } from "lucide-react";

export const LaunchBrowserTask = {
  type: TaskType.LAUNCH_BROWSER,
  label: "启动浏览器",
  icon: (props: LucideProps) => (
    <GlobeIcon className=" stroke-pink-400" {...props} />
  ),
  isEntryPoint: true,
  inputs: [
    {
      name: "网站地址",
      type: TaskParamType.STRING,
      helperText: "例如 https://www.google.com",
      required: true,
      hideHandle: true,
    },
  ],
  outputs: [
    {
      name: "网页",
      type: TaskParamType.BROWSER_INSTANCE,
    },
  ] as const,
};
