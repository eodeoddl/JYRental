import { useEffect, useState, useTransition } from "react";

export default function useTransitionComponent({
  render,
  renderElement,
}: {
  render: boolean;
  renderElement: any;
}): boolean | React.ReactNode {
  const [isPending, startTransition] = useTransition();
  const [shouldMount, setShouldMount] = useState(false);
  const [trigger, setTrigger] = useState<"onEnter" | "onExit">("onExit");

  useEffect(() => {
    if (render) startTransition(() => setShouldMount(true));
  }, []);

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
