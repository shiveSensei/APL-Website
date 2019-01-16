import React, { Component } from 'react';
import Hero from '../Hero/Hero'
import AboutUs from '../AboutUs/AboutUs'
import Capabilities from '../Capabilities/Capabilities';
import Clients from '../Clients/Clients'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'
import Contracts from '../Contracts/Contracts';


class Home extends Component {
  render() {
    return (
      <div className="Home">
     
        <Hero />
        <AboutUs />
        <Capabilities />
        <Clients />
        <Contracts />
        <Contact />
        <Footer />
       
      </div>
    );
  }
}

export default Home;