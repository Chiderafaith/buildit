import React from "react";

import Home from "./home";
import Services from "./service";
import About from './about'
import Work from './work';
import WhyUs from './whyUs';
import Testimonal from './testimonial';
import Contact from './contact';

function Pages() {
    return(
        <div>
         <Home />
         <Services />
         <About />
         <Work />
         <WhyUs />
         <Testimonal />
         <Contact />
        </div>
    );
}

export default Pages;