import React from "react";
import { Meta } from "@storybook/react";
import { templateForComponent } from "./helper";
import { ThemeProvider } from "styled-components";
import { Container, themes } from "../base";
import { Heading, HeadingProps, Text } from "../";

const meta: Meta = {
    title: "Heading",
    component: Heading,
    args: {},
    argTypes: {
        bg: { control: "color" },
        color: { control: "color" },
        fontFamily: { control: "text" },
        fontSize: { control: "number" },
        type: { control: "number" },
    },
};
export default meta;

const template = templateForComponent((props: HeadingProps) => (
    <ThemeProvider theme={themes.dark}>
        <Container bg={"background"} r>
            <Heading {...props}>{props.children}</Heading>
        </Container>
    </ThemeProvider>
));
export const HeadingStory = template({
    color: "text",
    fontFamily: "main",
    type: 1,
    children: "Hello World",
});
