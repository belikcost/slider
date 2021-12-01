import React from "react";

import Typography from "../../../../primitives/Typography";


interface PaginationPropsInterface {
    currentSlideNumber: number,
    currentSlideLength: number
}

const Pagination = (props: PaginationPropsInterface) => {
    const { currentSlideNumber, currentSlideLength } = props;

    return (
        <Typography variant="title" align="center">
            {`${currentSlideNumber}/${currentSlideLength}`}
        </Typography>
    );
};

export default React.memo(Pagination);