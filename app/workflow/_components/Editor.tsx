import type { Workflow } from "@prisma/client";
import React from "react";
import { ReactFlowProvider } from "@xyflow/react";
import FlowEditor from "./FlowEditor";
import Topbar from "./topbar/Topbar";

function Editor({ workdlow }: { workdlow: Workflow }) {
  return (
    <ReactFlowProvider>
      <div className="flex flex-col h-full w-full overflow-hidden">
        <Topbar
          title="工作流"
          subtitle="开始你的工作流程"
          workflowId={workdlow.id}
        />
        <section className="flex h-full overflow-auto">
          <FlowEditor workflow={workdlow} />
        </section>
      </div>
    </ReactFlowProvider>
  );
}

export default Editor;
