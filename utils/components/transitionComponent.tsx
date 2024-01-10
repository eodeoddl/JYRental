"use client";
import { useEffect, useState, useTransition } from "react";

type Trigger = "onEnter" | "onExit";
type OnTransitionEnd = () => void;
type RenderElement = (
  trigger: Trigger,
  onTransitionEnd: OnTransitionEnd,
) => React.ReactNode;

export default function TransitionComponent({
  render,
  renderElement,
}: {
  render: boolean;
  renderElement: RenderElement;
}): boolean | React.ReactNode {
  const [isPending, startTransition] = useTransition();
  const [shouldMount, setShouldMount] = useState(false);
  const [trigger, setTrigger] = useState<Trigger>("onExit");

  useEffect(() => {
    if (render) startTransition(() => setShouldMount(true));
  }, [render]);

  useEffect(() => {
    if (shouldMount) {
      render ? setTrigger("onEnter") : setTrigger("onExit");
    }
  }, [render, shouldMount]);

  const onTransitionEnd = () => {
    !render && startTransition(() => setShouldMount(false));
  };

  return (isPending || shouldMount) && renderElement(trigger, onTransitionEnd);
}
