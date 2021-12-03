import React from "react";
import styled from "styled-components";

import Typography from "../../../../primitives/Typography";


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
            <Typography variant="title" align="center" color="#fff">
                {`${currentSlideNumber}/${currentSlideLength}`}
            </Typography>
        </SlideCount>
    );
};

export default React.memo(SlideCountComponent);