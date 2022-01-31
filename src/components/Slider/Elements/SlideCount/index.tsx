import React from "react";
import styled from "styled-components";

import Typography from "../../../../primitives/Typography";
import { TypographyAlign, TypographyVariant } from "../../../../enums";



interface SlideCountPropsInterface {
    currentSlideNumber: number,
    currentSlideLength: number
}

const SlideCount = styled.div`
  position: absolute;
  right: 15px;
`;

const SlideCountComponent = ({ currentSlideNumber, currentSlideLength }: SlideCountPropsInterface) => {

    return (
        <SlideCount>
            <Typography variant={TypographyVariant.title} align={TypographyAlign.center} color="#fff">
                {`${currentSlideNumber}/${currentSlideLength}`}
            </Typography>
        </SlideCount>
    );
};

export default React.memo(SlideCountComponent);