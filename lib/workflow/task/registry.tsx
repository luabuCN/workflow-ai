import { LaunchBrowserTask } from "@/lib/workflow/task/LaunchBrowser";
import { TaskType } from "@/types/task";
import { PageToHtml } from "./pageToHtml";
import { ExtractTextFromElementTask } from "./ExtractTextFromElement";

export const TaskRegistry: Record<keyof typeof TaskType, any> = {
  LAUNCH_BROWSER: LaunchBrowserTask,
  PAGE_TO_HTML: PageToHtml,
  EXTRACT_TEXT_FROM_ELEMENT: ExtractTextFromElementTask,
};
