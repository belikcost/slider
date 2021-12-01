import React, { ReactNode } from "react";
import styled from "styled-components";


interface ContainerPropsInterface {
    children: ReactNode
}

const Container = styled.div`
  position: relative;

  display: flex;
`;

const ContainerComponent = (props: ContainerPropsInterface) => {
    const { children } = props;

    return (
        <Container>
            {children}
        </Container>
    );
};

export default ContainerComponent;