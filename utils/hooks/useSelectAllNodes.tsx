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

  const registerNode = (key: number, node: HTMLElement) => {
    const map = getNode();
    if (node) map.set(key, node);
    else map.delete(key);
  };

  useEffect(() => {
    setNodes(nodesRef.current);
  }, []);

  return { nodes, registerNode };
}

// "use client";

// import { useState } from "react";

// export type NodeList = Map<number, HTMLElement>;

// export default function useSelectAllNodes() {
//   const [nodes, setNodes] = useState<NodeList>(new Map());

//   const registerNode = (key: number, node: HTMLElement | null) => {
//     if (node) {
//       setNodes(prevNodes => new Map(prevNodes).set(key, node));
//     } else {
//       setNodes(prevNodes => {
//         const newNodes = new Map(prevNodes);
//         newNodes.delete(key);
//         return newNodes;
//       });
//     }
//   };

//   return { nodes, registerNode };
// }
