type EntrieTypes<T extends object> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

type ObjectKeyTypes<T extends object> = {
  [K in keyof T]: K;
}[keyof T][];

// type numbericRange<> =

type NumericRange<
  START extends number,
  END extends number,
  ARR extends unknown[] = [],
  ACC extends number = never,
> = ARR["length"] extends END
  ? ACC | START | END
  : NumericRange<
      START,
      END,
      [...ARR, 1],
      ARR[START] extends undefined ? ACC : ACC | ARR["length"]
    >;

type BreakPoints = {
  md: "(min-width : 640px)";
  lg: "(min-width : 1024px)";
};

type Viewport = "mobile" | "desktop" | null;

export type {
  EntrieTypes,
  ObjectKeyTypes,
  NumericRange,
  BreakPoints,
  Viewport,
};
