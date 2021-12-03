import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { SlideInterface } from "../../types";

import SlideItem from "../SlideItem";
import Navs from "./Elements/Navs";
import SlideCount from "./Elements/SlideCount";

import Container from "../../primitives/Container";

import { getSlideNumber } from "./utils";
import Pagination from "./Elements/Pagination";


interface SliderPropsInterface {
    slides: SlideInterface[],
    loop?: boolean,
    navs?: boolean,
    pags?: boolean,
    auto?: boolean,
    stopMouseHover?: boolean,
    delay?: number,
}

const DEFAULT_DELAY = 5000;

const Slider = ({ slides, navs, pags, loop, auto, delay, stopMouseHover }: SliderPropsInterface) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const slideFreeze = useRef(false);

    const onNextSlide = useCallback(
        () => {
            const next = currentSlide + 1;

            if (next < slides.length) {
                setCurrentSlide(next);
            } else if (loop) {
                setCurrentSlide(0);
            }
        }, [currentSlide, loop, slides.length]
    );

    const onPrevSlide = useCallback(
        () => {
            const prev = currentSlide - 1;

            if (prev >= 0) {
                setCurrentSlide(prev);
            } else if (loop) {
                setCurrentSlide(slides.length - 1);
            }
        }, [currentSlide, loop, slides.length]
    );

    const currentSlideNumber = getSlideNumber(currentSlide);
    const currentSlideLength = slides.length;

    const switchOnNextSlide = useCallback(() => {
        if (!slideFreeze.current) {
            onNextSlide();
        }
    }, [onNextSlide, slideFreeze.current]);

    useEffect(() => {
        if (!auto) return;

        const intervalDelay = delay || DEFAULT_DELAY;

        const interval = setInterval(switchOnNextSlide, intervalDelay);

        return () => clearInterval(interval);

    }, [switchOnNextSlide]);

    const onMouseEnterContainer = () => {
        const canFreeze = auto && stopMouseHover;

        if (canFreeze) {
            slideFreeze.current = true;
        }
    };

    const onMouseLeaveContainer = () => {
        const canFreeze = auto && stopMouseHover;

        if (canFreeze) {
            slideFreeze.current = false;
        }
    };

    const currentSlideItem = useMemo(() => slides[currentSlide], [currentSlide, slides]);

    return (
        <>
            <div onMouseEnter={onMouseEnterContainer} onMouseLeave={onMouseLeaveContainer}>
                <Container>
                    <SlideItem img={currentSlideItem.img} text={currentSlideItem.text}/>
                    {navs !== false && (
                        <Navs
                            color={'#fff'}
                            onNext={onNextSlide}
                            onPrev={onPrevSlide}
                        />
                    )}
                    <SlideCount
                        currentSlideNumber={currentSlideNumber}
                        currentSlideLength={currentSlideLength}
                    />
                </Container>
                {pags && (
                    <Pagination currentSlide={currentSlide} slides={slides} setCurrentSlide={setCurrentSlide}/>
                )}
            </div>
        </>
    );
};

export default React.memo(Slider);