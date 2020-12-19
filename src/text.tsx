import React, { ReactNode } from "react";
import styled from "styled-components";
import { BaseProps } from "./index";
import { color, ColorProps, typography, TypographyProps } from "styled-system";

export type TextProps = BaseProps & ColorProps & TypographyProps;

export const Text = styled.p<TextProps>`
    ${color};
    ${typography};
`;

export type HeadingProps = TextProps & { type: 1 | 2 | 3 | 4 | 5 | 6 };
export const Heading = (props: HeadingProps) => (
    <Text fontSize={36 - props.type * 2} {...props}>
        {props.children}
    </Text>
);
