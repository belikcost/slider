import React, { useCallback, useEffect, useMemo, useState } from "react";

import { SlideInterface } from "../../types";

import SlideItem from "../SlideItem";
import Navs from "../SlideItem/Elements/Navs";
import Pagination from "./Elements/Pagination";

import Container from "../../primitives/Container";

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
    const { slides, navs, pags, loop, auto, delay, stopMouseHover } = props;

    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const [slideFreeze, setSlideFreeze] = useState(false);

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

    const switchOnNextSlide = useCallback(() => {
        if (!slideFreeze) {
            onNextSlide();
        }
    }, [onNextSlide, slideFreeze]);

    useEffect(() => {
        if (auto) {
            const intervalDelay = delay || 5000;

            const interval = setInterval(switchOnNextSlide, intervalDelay);

            return () => clearInterval(interval);
        }
    }, [switchOnNextSlide]);

    const onMouseEnterContainer = () => {
          if (auto && stopMouseHover) {
              setSlideFreeze(true);
          }
    };

    const onMouseLeaveContainer = () => {
        if (auto && stopMouseHover) {
            setSlideFreeze(false);
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
                </Container>
            </div>
            {pags !== false && (
                <Pagination
                    currentSlideNumber={currentSlideNumber}
                    currentSlideLength={currentSlideLength}
                />
            )}
        </>
    );
};

export default Slider;