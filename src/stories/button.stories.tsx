import React from "react";
import { Meta } from "@storybook/react";
import { templateForComponent } from "./helper";
import { ThemeProvider } from "styled-components";
import { Container, themes } from "../base";
import { BtnProps, Button } from "../";

const meta: Meta = {
    title: "Button",
    component: Button,
    args: {},
    argTypes: {
        bg: { control: "color" },
        color: { control: "color" },
        border: { control: "string" },
        borderRadius: { control: "string" },
    },
};
export default meta;

const template = templateForComponent((props: BtnProps) => (
    <ThemeProvider theme={themes.dark}>
        <Container bg={"background"} r>
            <Button {...props}>{props.btnText}</Button>
        </Container>
    </ThemeProvider>
));
export const ButtonStory = template({
    color: "text",
    btnText: "Click Me",
    padding: 32,
    onClick: () => alert("Hello World"),
});
