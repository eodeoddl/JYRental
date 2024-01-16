"use client";
import { useEffect, useState, useTransition } from "react";

type OnTransitionEnd = () => void;
type RenderElement = (
  trigger: string,
  onTransitionEnd: OnTransitionEnd,
) => React.ReactNode;

export default function TransitionComponent({
  render,
  renderElement,
  onExit,
  onEnter,
}: {
  render: boolean;
  renderElement: RenderElement;
  onExit: string;
  onEnter: string;
}): boolean | React.ReactNode {
  const [isPending, startTransition] = useTransition();
  const [shouldMount, setShouldMount] = useState(false);
  const [trigger, setTrigger] = useState(onExit);

  useEffect(() => {
    if (render) startTransition(() => setShouldMount(true));
  }, [render]);

  useEffect(() => {
    if (shouldMount) {
      render ? setTrigger(onEnter) : setTrigger(onExit);
    }
  }, [render, shouldMount]);

  const onTransitionEnd = () => {
    !render && startTransition(() => setShouldMount(false));
  };

  return (isPending || shouldMount) && renderElement(trigger, onTransitionEnd);
}
