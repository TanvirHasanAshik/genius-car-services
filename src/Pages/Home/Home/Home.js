import React from 'react';
import Carousel from '../Carousel/Carousel';
import Exparts from '../Exparts/Exparts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Services></Services>
            <Exparts></Exparts>
        </div>
    );
};

export default Home;