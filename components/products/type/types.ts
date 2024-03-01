import filterOptions from "../assets/filterOptions.json";
import qnas from "../assets/qnas.json";

type FilterOptions = {
  [cartegory: string]: string[];
};

type Qnas = {
  [key: string]: string;
};

export const TypedFilterOptions: FilterOptions = filterOptions as FilterOptions;
export const TypedQnas: Qnas = qnas as Qnas;
