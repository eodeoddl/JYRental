type EntrieTypes<T extends object> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

type ObjectKeyTypes<T extends object> = {
  [K in keyof T]: K;
}[keyof T][];

type BreakPoints = {
  md: "(min-width : 640px)";
  lg: "(min-width : 1024px)";
};

type Viewport = "mobile" | "desktop" | null;

export type { EntrieTypes, ObjectKeyTypes, BreakPoints, Viewport };
