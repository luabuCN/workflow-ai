import { LaunchBrowserTask } from "@/lib/workflow/task/LaunchBrowser";
import { TaskType } from "@/types/task";
import { PageToHtml } from "./pageToHtml";

export const TaskRegistry = {
  LAUNCH_BROWSER: LaunchBrowserTask,
  PAGE_TO_HTML: PageToHtml,
};
