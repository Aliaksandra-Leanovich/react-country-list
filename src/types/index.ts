export interface ICountry {
  name: string;
  capital: string;
  population: number;
  flags: string;
  area: number;
  region: string;
}
export const enum Color {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Danger = "danger",
  Warning = "warning",
  Info = "info",
  Light = "light",
  Dark = "dark",
}
export type BadgeLabel = "area" | "population";
