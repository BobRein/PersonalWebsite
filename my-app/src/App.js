import React from 'react';
import Header from './Header';
import Spacer from './Spacer';
import InfoBlock from './InfoBlock';
import Experience from './Experience';
import Skills from './Skills';
import Footer from './Footer';
import Contact from './Contact';

class App extends React.Component {
  render() {
      return (
      <div className="App">
        
        <Header/>       
          
        <Contact></Contact>

        <Spacer/> 

        <InfoBlock 
          title = "About me"
          image = "https://i.imgur.com/gayVnOW.jpg"
          description = "I have a passion for computer science."/>
        <Spacer/>

        <InfoBlock 
          title = "Education"
          image = "https://i.imgur.com/iXD1Pug.png"
          description = "In May 2021, I will graduate from Baylor University with a Bachelors Degree
          in computer science. I have learned so much from taking 17 computer science classes 
          including data structures, algorithms, software engineering, networking, operating systems,
          database design, and cyber security. These classes have also strengthened my collaboration 
          with 7 group projects."/>
        <Spacer/>
         
        <Experience title = "Summer Internships"/>
           
        <Skills title = "Technologies, Skills, and Languages"/>
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
