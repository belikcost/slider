import React, { ReactNode } from "react";
import styled from "styled-components";

import { TypographyAlign, TypographyVariant } from "../../enums";


interface TypographyPropsInterface {
    children: ReactNode,
    variant: TypographyVariant,
    color?: string,
    align?: TypographyAlign,
}

interface StylesPropsInterface {
    align: TypographyAlign | undefined;
    color: string | undefined;
}

const defaultStyles = {
    fontFamily: 'sans-serif',
    color: '#000',
};

const BodyStyles = ({ align, color }: StylesPropsInterface) => {

    return ({
        ...defaultStyles,
        color,
        textAlign: align,
        fontSize: 15,
    });
};

const Body = styled.p(BodyStyles);

const TitleStyles = ({ align, color }: StylesPropsInterface) => {

    return ({
        ...defaultStyles,
        color,
        textAlign: align,
        fontSize: 20,
    });
};

const Title = styled.h2(TitleStyles);

const Typography = (props: TypographyPropsInterface) => {
    const { children, variant, color, align } = props;

    if (variant === TypographyVariant.body) {

        return (
            <Body align={align} color={color}>
                {children}
            </Body>
        );
    } else if (variant === TypographyVariant.title) {

        return (
            <Title align={align} color={color}>
                {children}
            </Title>
        );
    }

    return null;
};

export default React.memo(Typography);