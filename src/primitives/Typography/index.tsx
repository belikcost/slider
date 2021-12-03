import React, { ReactNode } from "react";
import styled from "styled-components";

import { TypographyAlign, TypographyVariant } from "../../enums";


interface TypographyPropsInterface {
    children: ReactNode,
    variant: TypographyVariant,
    color?: string,
    align?: TypographyAlign,
}

const defaultStyles = {
    fontFamily: 'sans-serif',
    color: '#000',
};

const Typography = (props: TypographyPropsInterface) => {
    const { children, variant, color, align } = props;

    if (variant === TypographyVariant.body) {
        const Body = styled.p({
            ...defaultStyles,
            color,
            textAlign: align,
            fontSize: 15,
        });

        return (
            <Body color={color}>
                {children}
            </Body>
        );
    } else if (variant === TypographyVariant.title) {
        const Title = styled.h2({
            ...defaultStyles,
            color,
            textAlign: align,
            fontSize: 20,
        });

        return (
            <Title color={color}>
                {children}
            </Title>
        );
    } else {
        return null;
    }

};

export default React.memo(Typography);