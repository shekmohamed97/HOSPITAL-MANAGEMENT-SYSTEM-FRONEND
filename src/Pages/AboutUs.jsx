import React from 'react';
import Hero from '../Components/Hero';
import Biography from '../Components/Biography';


const AboutUs = () => {
    return (
        <>
          <Hero tittle={"Learn more about us | Mr.shek Medical institute"}
          imageUrl={"/about.png"}/>
          <Biography imageUrl={"/whoweare.png"}/>  
        </>
    );
};

export default AboutUs;