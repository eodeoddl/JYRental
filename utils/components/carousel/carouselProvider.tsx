import { createContext, useContext, useReducer } from "react";

const CarouselContext = createContext<number | null>(null);
const CarouselDispatchContext =
  createContext<React.Dispatch<ReducerAction> | null>(null);

export const useCarouselContext = () => useContext(CarouselContext);
export const useCarouselDispatcher = () => useContext(CarouselDispatchContext);

export default function CarouselProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [slideIndex, dispatch] = useReducer(reducer, 0);

  return (
    <CarouselContext.Provider value={slideIndex}>
      <CarouselDispatchContext.Provider value={dispatch}>
        {children}
      </CarouselDispatchContext.Provider>
    </CarouselContext.Provider>
  );
}

type ReducerAction = { type: "increase" | "decrease"; containerRange?: number };

const reducer = (state: number, action: ReducerAction) => {
  let nextState = state;
  switch (action.type) {
    case "increase":
      if (action.containerRange && state < action.containerRange - 1)
        nextState = state + 1;
      break;
    case "decrease":
      if (state > 0) nextState = state - 1;
      break;
  }
  return nextState;
};
