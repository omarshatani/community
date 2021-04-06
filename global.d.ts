import "@react-navigation/native";
import { DefaultTheme, Theme } from "@react-navigation/native";

declare module "@react-navigation/native" {
  export type ExtendedTheme = {
    dark: boolean;
    colors: {
      primary: string;
      secondary?: string;
      tertiary?: string;
      danger: string;
      background: string;
      card: string;
      text: string;
      subtext?: string;
      notification?: string;
      border: string;
      common: {
        white: string;
        black: string;
        grey?: string;
      };
    };
    fonts?: {
      regular: string;
      bold: string;
      semibold: string;
      light: string;
      black: string;
    };
  };
  export type ExtendedThemeProps = {
    theme: ExtendedTheme;
  };
  export function useTheme(): ExtendedTheme;
}
