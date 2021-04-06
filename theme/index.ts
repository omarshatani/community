import { DefaultTheme, ExtendedTheme } from "@react-navigation/native";

export let theme: ExtendedTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    danger: "rgb(208, 2, 27)",
    primary: "rgb(0, 102, 204)",
    background: "rgb(255, 255, 255)",
    common: {
      white: "rgb(255, 255, 255)",
      black: "rgb(0,0,0)",
      grey: "rgb(34, 34, 34)",
    },
  },
};
