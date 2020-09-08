import React from 'react';
import Header from './Header';
import Spacer from './Spacer';
import InfoBlock from './InfoBlock';
import Experience from './Experience';
import Skills from './Skills';
import Footer from './Footer';

class App extends React.Component {
  render() {
      return (
      <div className="App">
        
        <Header/>
        <Spacer/>        
        
        <InfoBlock 
          title = "About me"
          image = "https://i.imgur.com/gayVnOW.jpg"
          description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt "/>
        <Spacer/>
         
        <InfoBlock 
          title = "Education"
          image = "https://i.imgur.com/iXD1Pug.png"
          description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt "/>
        <Spacer/>
         
        <Experience title = "Summer Internships"/>
           
        <Skills title = "Technologies and Languages"/>
        <Spacer/>

        <InfoBlock 
          title = "Personal Hobbies"
          image = "https://i.imgur.com/Tv7QXgI.png"
          description = "I love playing with my dog, backpacking, and playing club ultimate frisbee."/>
        <Footer/> 
        
      </div>
    );
  }
}

export default App;
