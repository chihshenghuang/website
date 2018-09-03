import React, { Component } from 'react';
import Header from './Header'
import About from './About'
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default App;
