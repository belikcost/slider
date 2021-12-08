import React, { Dispatch, SetStateAction, useCallback } from "react";
import styled from "styled-components";


interface PaginationPropsInterface {
    currentSlide: number;
    slidesLength: number;
    setCurrentSlide: Dispatch<SetStateAction<number>>;
}

const Circle = styled.div(({ active }: { active: boolean }) => ({
    width: 20,
    height: 20,
    borderRadius: '50%',
    border: '2px solid #000',
    backgroundColor: active ? '#000' : 'none',
    margin: '0 3px',
    cursor: 'pointer',
}));

interface CircleComponentPropsInterface {
    active: boolean;
    slideIndex: number;
    setCurrentSlide: (slideIndex: number) => void;
}

const CircleComponent = ({ active, slideIndex, setCurrentSlide }: CircleComponentPropsInterface) => {
    const onClick = useCallback(() => setCurrentSlide(slideIndex), [slideIndex]);

    return (
        <Circle
            active={active}
            onClick={onClick}
        />
    );
}

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const PaginationComponent = ({ currentSlide, slidesLength, setCurrentSlide }: PaginationPropsInterface) => {

    const ArrayBySlidesLength = Array.from(Array(slidesLength));

    return (
        <Pagination>
            {ArrayBySlidesLength.map((_, i) => (
                <CircleComponent
                    active={currentSlide === i}
                    slideIndex={i}
                    setCurrentSlide={setCurrentSlide}
                    key={i}
                />
            ))}
        </Pagination>
    );
};

export default React.memo(PaginationComponent);