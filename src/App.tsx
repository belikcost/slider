import styled from "styled-components";

import Slider from "./components/Slider";


const slides = [
    {
        img: 'https://автоинфо.рус/wp-content/uploads/2020/02/Ferrari-1280x720.jpg',
        text: 'Ferrari'
    },
    {
        img: 'https://cdn.motor1.com/images/mgl/VA0z9/s3/tesla-roadster.jpg',
        text: 'Tesla'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Bugatti_Divo%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0029%29.jpg',
        text: 'Bugatti'
    },
];

const AppContainer = styled.div`
  width: 800px;
  
  margin: 0 auto;
`;

export const App = () => {

    return (
        <AppContainer>
            <Slider
                slides={slides}
                loop={true}
                navs={true}
                pags={true}
                auto={true}
                delay={5000}
                stopMouseHover={true}
            />
        </AppContainer>
    );
};