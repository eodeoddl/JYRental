import { createContext, useCallback, useContext } from "react";

type ActionType = "addDomRect" | "getDomRect";
type PayloadType = {
  domName: string;
  domRect?: DOMRect;
};

const PositionContext = createContext(new Map());
export default function usePositionContext() {
  const context = useContext(PositionContext);
  const contextDispatcher = useCallback(
    (action: ActionType, payload: PayloadType) => {
      switch (action) {
        case "addDomRect": {
          return context.set(payload.domName, payload.domRect);
        }
        case "getDomRect": {
          return context.get(payload.domName);
        }
        default:
          throw Error("");
      }
    },
    [],
  );

  return contextDispatcher;
}
