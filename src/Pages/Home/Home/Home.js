import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Service/Service';

const Home = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;