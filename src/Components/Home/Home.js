import React, { Component } from 'react';
import Hero from '../Hero/Hero'
import AboutUs from '../AboutUs/AboutUs'
import Capabilities from '../Capabilities/Capabilities';
import Clients from '../Clients/Clients'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'
import Contracts from '../Contracts/Contracts';


class Home extends Component {
  constructor(props){
    super(props)
    this.aboutRef = React.createRef()
    this.capRef = React.createRef()
    this.contractRef = React.createRef()
    this.contactRef = React.createRef()
    this.clientRef = React.createRef()

    this.state={
      about: this.aboutRef,
      caps: this.capRef,
      contracts: this.contractRef,
      contact: this.contactRef,
      client: this.clientRef
    
    }
  }



  scrollToMyRef = (name) => {   // run this method to execute scrolling. 
    const ref = this.state[name]
    console.log(ref)
    window.scrollTo({
        top:ref.current.offsetTop, 
        behavior: "smooth"   // Optional, adds animation
    })
  }

  render() {
    return (
      <div className="Home">
     
        <Hero scroll={this.scrollToMyRef} />
        <AboutUs refProp={this.aboutRef} test={this.scrollToMyRef} />
        <Capabilities refProp={this.capRef} />
        <Clients refProp={this.clientRef} />
        <Contracts refProp={this.contractRef}  />
        <Contact refProp={this.contactRef} />
        <Footer />
       
      </div>
    );
  }
}

export default Home;