export const LANG = (localStorage.getItem("lang") ||
  navigator.language ||
  "en") as string | undefined;

export const THEME = (localStorage.getItem("theme") || "light") as
  | "dark"
  | "light";
