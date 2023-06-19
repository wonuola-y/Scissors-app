import React from 'react'
import Nav from './Nav';

import Hero from './Heo';
import Info from './Info';
import Pricing from './Pricing';
import Faq from './Faq';
import { Form } from './Form';
import Starting from './Starting';
import Footer from './Footer-section';
import Signup from './Signup';

 interface IHomeProps{}

export const Home: React.FC<IHomeProps> = (props) => {
  return (
    <div>
        {/* Header */}
        <Nav />
        <Hero />
        <Info />
        <Pricing />
        <Form />
        <Faq />
        <Starting />
        <Footer/>     
    </div>
  )
}

