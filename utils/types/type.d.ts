type EntrieTypes<T extends object> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

type ObjectKeyTypes<T extends object> = {
  [K in keyof T]: K;
}[keyof T][];

type ScreenBreakPoint_Header = [430, 500];

export type { ObjectKeyTypes, EntrieTypes, ScreenBreakPoint_Header };
