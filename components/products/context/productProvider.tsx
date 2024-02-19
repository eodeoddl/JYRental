import { createContext, useReducer } from "react";

const ProductContext = createContext(null);
const ProductDispatchContext = createContext(null);

export default function ProductProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useReducer(reducer, {});
  return (
    <ProductContext.Provider value={state}>
      <ProductDispatchContext.Provider>
        {children}
      </ProductDispatchContext.Provider>
    </ProductContext.Provider>
  );
}

const reducer = (state, action) => {
  switch (action.type) {
    case "":
      return state;
    default:
      return state;
  }
};
