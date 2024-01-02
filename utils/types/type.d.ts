type EntrieTypes<T extends object> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

type ObjectKeyTypes<T extends object> = {
  [K in keyof T]: K;
}[keyof T][];

export type { ObjectKeyTypes, EntrieTypes };
