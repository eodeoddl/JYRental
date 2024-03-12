import { createContext } from "vm";

const HistoryContext = createContext();

export default function HistoryContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HistoryContext.provider>{children}</HistoryContext.provider>;
}
