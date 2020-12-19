import React, { ReactNode } from "react";
import "./card.scss";
import styled from "styled-components";
import { BaseProps, Container, ContainerProps } from "../base";
import { color } from "styled-system";
import { Heading, Text, TextProps } from "../text";

export type CardProps = BaseProps<{
    cardTitle?: ReactNode;
    cardSubtitle?: ReactNode;
    bodyFontSize?: string | number;
}> &
    TextProps &
    ContainerProps;

const RawCard = (props: CardProps) => (
    <Container {...props} className={"card"}>
        <header className={"card-header"}>
            {typeof props.cardTitle === "string" ? (
                <Heading type={2} fontWeight={400} {...props}>
                    {props.cardTitle}
                </Heading>
            ) : (
                props.cardTitle
            )}
            {typeof props.cardSubtitle === "string" ? (
                <Heading
                    fontFamily={props.fontFamily}
                    fontWeight={500}
                    type={3}
                    color={"gray"}
                >
                    {props.cardSubtitle}
                </Heading>
            ) : (
                props.cardSubtitle
            )}
        </header>
        <Text
            {...props}
            fontSize={props.bodyFontSize ?? props.fontSize}
            className={"card-content"}
        >
            {props.children}
        </Text>
    </Container>
);

export const Card = styled(RawCard)`
    ${color}
`;

/*
const Card = (props: CardProps) => (
    <article className={"card"}>
        <header className={"card-header"}>
            {typeof props.cardTitle === "string" ? (
                <h2>{props.cardTitle}</h2>
            ) : (
                props.cardTitle
            )}
        </header>
        <p className={"card-content"}> {props.children}</p>
    </article>
);

export default styled(Card)`
    background-color: ${(props: CardProps) => props.theme.backgroundColor.};
    color: "white";
    font-family: "Source Code Pro";
    border-radius: 0;
`;*/
