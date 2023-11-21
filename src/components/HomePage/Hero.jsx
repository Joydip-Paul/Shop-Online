import React from 'react'
import heroBg from '../../assets/images/hero1.jpeg';

var heroBanner = {
    backgroundImage: "url(" + heroBg + ")"
};

export const Hero = () => {
    return (
        <section style={heroBanner} className='home-hero'>
            <div className='container'>
                <div className='home-hero__content'>
                    <h1>Buy From Jhakanaka</h1>
                    <div className="search">
                        <input type="text" placeholder='Search...' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;