import React from "react";
import styled from "styled-components";

import { SlideInterface } from "../../types";

import Typography from "../../primitives/Typography";


const Image = styled.img`
  width: 100%;
`;

const Figure = styled.figure`
  position: absolute;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  background: #fff;
  padding: 0 10px;
  border-radius: 10px;
  
  width: 130px;
  height: 50px;
`;

const SlideItem = (props: SlideInterface) => {
    const { img, text } = props;

    return (
        <>
            <Image src={img} alt={text}/>
            <Figure>
                <Typography variant="title">
                    {text}
                </Typography>
            </Figure>
        </>
    );
};

export default React.memo(SlideItem);