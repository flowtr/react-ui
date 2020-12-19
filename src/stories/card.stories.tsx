import React from "react";
import { Meta } from "@storybook/react";
import { templateForComponent } from "./helper";
import { CardProps } from "../card";
import { ThemeProvider } from "styled-components";
import { Container, themes } from "../base";
import { Card } from "../";

const meta: Meta = {
    title: "Card",
    component: Card,
    args: {},
    argTypes: {
        bg: { control: "color" },
        color: { control: "color" },
        fontFamily: { control: "text" },
        fontSize: { control: "number" },
        width: { control: "string" },
        height: { control: "string" },
    },
};
export default meta;

const template = templateForComponent((props: CardProps) => (
    <ThemeProvider theme={themes.dark}>
        <Container bg={"background"} r>
            <Card {...props} />
        </Container>
    </ThemeProvider>
));
export const CardStory = template({
    cardTitle: "Hello World",
    cardSubtitle: "Made By Theo Paris",
    color: "text",
    bg: "cardBackground",
    fontFamily: "main",
    width: "200px",
    height: "200px",
    children: "Hello world. This is a test card.",
});
