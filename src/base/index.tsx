import { ThemedStyledProps } from "styled-components";
import { HTMLAttributes } from "react";
import { Theme } from "styled-system";
import "./base.scss";

export const themes: Record<"dark", Theme> = {
    dark: {
        colors: {
            cardBackground: "#333333",
            background: "#121212",
            text: "#fff",
            primary: "#008CBA",
        },
        fonts: { main: "Source Code Pro" },
    },
};

export type BaseProps<P = Record<string, unknown>, E = HTMLDivElement> = P &
    HTMLAttributes<E>;

export * from "./container";
