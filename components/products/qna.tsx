"use client";
import qnas from "./assets/qnas.json";
import { Icon } from "@/utils/components/icon";
import icons from "./assets/iconsqna.json";
import useSelectAllNodes from "@/utils/hooks/useSelectAllNodes";
import useAccordian from "@/utils/hooks/useAccordian";

export default function Qna() {
  const { nodes, resisterNode } = useSelectAllNodes();
  const { handleAccordian } = useAccordian(nodes);

  return (
    <ul>
      {Object.keys(qnas).map((question, i) => (
        <li
          key={i}
          className="w-9/12 mx-auto"
          onClick={() => handleAccordian(i)}
        >
          <div className="flex justify-between items-center border-b-2 p-1 my-3 cursor-pointer">
            <span className="text-xl font-bold">{question}</span>
            <Icon
              path={icons.plusIcon.path}
              viewBox={icons.plusIcon.viewBox}
              className="w-4 h-4"
            />
          </div>
          <div ref={el => el && resisterNode(i, el)}>{qnas[question]}</div>
        </li>
      ))}
    </ul>
  );
}
