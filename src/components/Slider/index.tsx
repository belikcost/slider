import { useCallback, useMemo, useState } from "react";

import { SlideInterface } from "../../types";

import SlideItem from "../SlideItem";

import Navs from "../SlideItem/Elements/Navs";
import Container from "../SlideItem/Elements/Container";

import Typography from "../../primitives/Typography";

import { getSlideNumber } from "./utils";


interface SliderPropsInterface {
    slides: SlideInterface[],
    loop?: boolean,
    navs?: boolean,
    pags?: boolean,
    auto?: boolean,
    stopMouseHover?: boolean,
    delay?: number,
}

const Slider = (props: SliderPropsInterface) => {
    const { slides, navs, pags, loop } = props;

    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const onNextSlide = useCallback(
        () => {
            let next = currentSlide + 1;

            if (next < slides.length) {
                setCurrentSlide(next);
            } else if (loop) {
                setCurrentSlide(0);
            }
        }, [currentSlide, loop, slides.length]
    );

    const onPrevSlide = useCallback(
        () => {
            let prev = currentSlide - 1;

            if (prev >= 0) {
                setCurrentSlide(prev);
            } else if (loop) {
                setCurrentSlide(slides.length - 1);
            }
        }, [currentSlide, loop, slides.length]
    );

    const currentSlideNumber = useMemo(() => getSlideNumber(currentSlide), [currentSlide]);
    const currentSlideLength = useMemo(() => slides.length, [slides.length]);

    return (
        <>
            <Container>
                <SlideItem {...slides[currentSlide]}/>
                {navs !== false && (
                    <Navs
                        color={'#fff'}
                        onNext={onNextSlide}
                        onPrev={onPrevSlide}
                    />
                )}
            </Container>
            {pags !== false && (
                <Typography variant="title" align="center">
                    {`${currentSlideNumber}/${currentSlideLength}`}
                </Typography>
            )}
        </>
    );
};

export default Slider;