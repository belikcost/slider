import { ReactNode } from "react";
import styled from "styled-components";

type variantType = 'body' | 'title';
type alignType = 'center' | 'right' | 'left';

interface TypographyPropsInterface {
    children: ReactNode,
    variant: variantType,
    color?: string,
    align?: alignType,
}

const defaultStyles = {
    fontFamily: 'sans-serif',
    color: '#000',
};



const Typography = (props: TypographyPropsInterface) => {
    const { children, variant, color, align } = props;

    const Body = styled.p({
        ...defaultStyles,
        color,
        textAlign: align,
        fontSize: 15,
    });

    const Title = styled.h2({
        ...defaultStyles,
        color,
        textAlign: align,
        fontSize: 20,
    });

    if (variant === 'body') {

        return (
            <Body color={color}>
                {children}
            </Body>
        );
    } else if (variant === 'title') {

        return (
            <Title color={color}>
                {children}
            </Title>
        );
    } else {

        return null;
    }
};

export default Typography;