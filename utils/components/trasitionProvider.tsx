import { createContext, useEffect, useState, useTransition } from "react";

export const TriggerContext = createContext<null | string>(null);
export const RenderDispatchContext = createContext<null | (() => void)>(null);

export function RenderTransitionProvider({
  children,
  render,
  onEnter,
  onExit,
}: {
  children: React.ReactNode;
  render: boolean;
  onEnter: string;
  onExit: string;
}) {
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

  return (
    (isPending || shouldMount) && (
      <TriggerContext.Provider value={trigger}>
        <RenderDispatchContext.Provider value={onTransitionEnd}>
          {children}
        </RenderDispatchContext.Provider>
      </TriggerContext.Provider>
    )
  );
}
