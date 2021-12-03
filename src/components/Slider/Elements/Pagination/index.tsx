import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

import { SlideInterface } from "../../../../types";


interface PaginationPropsInterface {
    currentSlide: number;
    slides: SlideInterface[];
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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const PaginationComponent = ({ currentSlide, slides, setCurrentSlide }: PaginationPropsInterface) => {

    return (
        <Pagination>
            {slides.map((slide, i) => (
                <Circle
                    active={currentSlide === i}
                    onClick={() => setCurrentSlide(i)}
                    key={i}
                />
            ))}
        </Pagination>
    );
};

export default React.memo(PaginationComponent, (prevProps: PaginationPropsInterface, nextProps: PaginationPropsInterface) => {
    const currentSlideAreEqual = prevProps.currentSlide === nextProps.currentSlide;
    const slidesLengthAreEqual = prevProps.slides.length === nextProps.slides.length;

    return currentSlideAreEqual && slidesLengthAreEqual;
});