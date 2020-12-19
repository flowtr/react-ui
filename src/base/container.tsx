import React, { ReactNode } from "react";
import styled from "styled-components";
import { BaseProps } from "./index";
import {
    BackgroundColorProps,
    color,
    ColorProps,
    padding,
    PaddingProps,
    layout,
    LayoutProps,
    border,
    BorderRadiusProps,
    BorderProps,
    ShadowProps,
    shadow,
} from "styled-system";

export type ContainerProps = BaseProps &
    ColorProps &
    BackgroundColorProps &
    PaddingProps &
    LayoutProps &
    BorderRadiusProps &
    BorderProps &
    ShadowProps;

export const Container = styled.div<ContainerProps>`
    ${color} ${layout} ${padding} ${border} ${shadow}
`;

Container.defaultProps = { width: "100%", height: "100%", display: "flex" };
