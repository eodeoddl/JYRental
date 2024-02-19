"use client";

import { useEffect, useState } from "react";
import type { NodeList } from "./useSelectAllNodes";

export default function useAccordian(nodes: NodeList | null) {
  const [active, setActive] = useState<[] | boolean[]>([]);

  const handleAccordian = (index: number) => {
    if (!active.length) return;
    const clone = active.slice();
    clone[index] = !active[index];
    setActive(clone);
  };

  useEffect(() => {
    if (nodes) setActive(Array.from({ length: nodes.size }, _ => false));
    nodes?.forEach(node => {
      node.style.maxHeight = "0px";
      node.style.overflow = "hidden";
      node.style.transitionProperty = "max-height";
      node.style.transitionDuration = "150ms";
      node.style.transitionTimingFunction = "cubic-bezier(0.4, 0, 0.2, 1)";
    });
  }, [nodes]);

  useEffect(() => {
    if (!active.length || !nodes) return;
    active.forEach((isActive, i) => {
      const currentNode = nodes.get(i);
      if (!currentNode) return;
      if (isActive) {
        currentNode.style.maxHeight = currentNode.scrollHeight + "px";
      } else {
        currentNode.style.maxHeight = "0px";
      }
    });
  }, [active]);

  return { active, handleAccordian };
}
