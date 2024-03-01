import { useCallback, useEffect, useRef, useState } from "react";
type NodeMap = Map<number, HTMLElement>;

export default function useNodeMap() {
  const nodeMap = useRef<NodeMap>();
  const [node, setNode] = useState<NodeMap>();

  const registerNode = useCallback((id: number, el: HTMLElement | null) => {
    if (!nodeMap.current) nodeMap.current = new Map();
    if (el) nodeMap.current.set(id, el);
    else nodeMap.current.delete(id);
  }, []);

  useEffect(() => {
    setNode(nodeMap.current);
  }, []);

  return [node, registerNode] as const;
}
