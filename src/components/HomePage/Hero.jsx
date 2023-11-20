import React from 'react'
import heroBg from '../../assets/images/hero1.jpeg';

var heroBanner = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + heroBg + ")"
};

export const Hero = () => {
    return (
        <section style={heroBanner}>
            <div className='container'>
                <h1>Buy From Jhakanaka</h1>
            </div>
        </section>
    )
}

export default Hero;