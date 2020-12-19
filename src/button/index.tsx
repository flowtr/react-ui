import React, { ReactNode } from "react";
import { BaseProps, ContainerProps, themes } from "../base";
import styled from "styled-components";
import { border, color, height, width, shadow } from "styled-system";

export type BtnProps = BaseProps<
    {
        onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
        btnText?: ReactNode;
    } & ContainerProps,
    HTMLButtonElement
>;

const RawButton = styled.button<BtnProps>`
    ${color} ${border} ${width} ${height} ${shadow}
`;

export const Button = (props: BtnProps) => (
    <RawButton {...props}>{props.btnText}</RawButton>
);

Button.defaultProps = {
    borderRadius: 0,
    border: "2px solid gray",
    width: 100,
    height: 50,
    btnText: "Button",
    bg: "primary",
};
