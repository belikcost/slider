import React from "react";
import styled from "styled-components";


interface NavsPropsInterface {
    color: string,
    onNext: () => void,
    onPrev: () => void,
}

const Icon = styled.svg(({ color }) => ({
    width: 20,
    height: 20,
    fill: color
}));

const Button = styled.button`
  outline: none;
  background: none;
  border: none;
`;

const Navs = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  justify-content: space-between;
  
  position: absolute;
`;


const NavsComponent = ({ color, onNext, onPrev }: NavsPropsInterface) => {

    return (
        <Navs>
            <Button onClick={onPrev}>
                <Icon color={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175">
                    <path d="m145.188 238.575 215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"/>
                </Icon>
            </Button>
            <Button onClick={onNext}>
                <Icon color={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175">
                    <path d="m360.731 229.075-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"/>
                </Icon>
            </Button>
        </Navs>
    );
};

export default NavsComponent;