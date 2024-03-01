import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type AccordionContextType = [boolean, Dispatch<SetStateAction<boolean>>];
const AccordionContext = createContext<AccordionContextType | null>(null);

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error();
  return context;
};

export default function AccordionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordionContext.Provider value={[isActive, setIsActive]}>
      {children}
    </AccordionContext.Provider>
  );
}

// export interface WithAccordionContextProps {
//   accordionContext: AccordionContextType;
// }

// export function withAccordionContext<
//   T extends WithAccordionContextProps = WithAccordionContextProps,
// >(
//   Component: React.ComponentType<T>,
// ): React.FC<Omit<T, keyof WithAccordionContextProps>> {
//   const WithAccordionContextComponent: React.FC<
//     Omit<T, keyof WithAccordionContextProps>
//   > = props => {
//     const accordionContext = useContext(AccordionContext);
//     if (!accordionContext) throw Error();
//     return <Component {...(props as T)} accordionContext={accordionContext} />;
//   };

//   return WithAccordionContextComponent;
// }
