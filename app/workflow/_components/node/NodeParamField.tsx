import { Input } from "@/components/ui/input";
import { TaskParamType, type TaskParam } from "@/types/task";
import React, { useCallback } from "react";
import StringParams from "./param/StringParams";
import { useReactFlow } from "@xyflow/react";
import type { AppNode } from "@/types/appNode";
import BrowserInstanceParam from "./param/BrowserInstanceParam";

function NodeParamField({
  param,
  nodeId,
  disabled,
}: {
  param: TaskParam;
  nodeId: string;
  disabled: boolean;
}) {
  const { updateNodeData, getNode } = useReactFlow();
  const node = getNode(nodeId) as AppNode;
  const value = node?.data.inputs?.[param.name];

  const updateNodeParamValue = useCallback(
    (newValue: string) => {
      updateNodeData(nodeId, {
        inputs: {
          ...node.data.inputs,
          [param.name]: newValue,
        },
      });
    },
    [nodeId, updateNodeData, param.name, node?.data]
  );
  switch (param.type) {
    case TaskParamType.STRING:
      return (
        <StringParams
          param={param}
          value={value}
          updateNodeParamValue={updateNodeParamValue}
          disabled={disabled}
        />
      );
    case TaskParamType.BROWSER_INSTANCE:
      return (
        <BrowserInstanceParam
          param={param}
          value={""}
          updateNodeParamValue={updateNodeParamValue}
        />
      );
    default:
      return (
        <div className="w-full">
          <p className="text-xs text-muted-foreground">Not implemented</p>
        </div>
      );
  }
}

export default NodeParamField;
