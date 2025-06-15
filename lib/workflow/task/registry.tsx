import { LaunchBrowserTask } from "@/lib/workflow/task/LaunchBrowser";
import { TaskType } from "@/types/task";
import { PageToHtml } from "./pageToHtml";
import { ExtractTextFromElementTask } from "./ExtractTextFromElement";
import { WorkflowTask } from "@/types/workflow";

type Registry = {
  [K in TaskType] : WorkflowTask & { type : K}
}

export const TaskRegistry: Registry = {
  LAUNCH_BROWSER: LaunchBrowserTask,
  PAGE_TO_HTML: PageToHtml,
  EXTRACT_TEXT_FROM_ELEMENT: ExtractTextFromElementTask,
};
