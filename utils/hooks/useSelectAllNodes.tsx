"use client";

import { useEffect, useRef, useState } from "react";

export type NodeList = Map<number, HTMLElement>;

export default function useSelectAllNodes() {
  const nodesRef = useRef<null | NodeList>(null);
  const [nodes, setNodes] = useState<null | NodeList>(null);

  const getNode = () => {
    if (!nodesRef.current) nodesRef.current = new Map();
    return nodesRef.current;
  };

  const resisterNode = (key: number, node: HTMLElement) => {
    const map = getNode();
    if (node) map.set(key, node);
    else map.delete(key);
  };

  useEffect(() => {
    setNodes(nodesRef.current);
  }, []);

  return { nodes, resisterNode };
}
