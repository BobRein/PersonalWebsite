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
          description = "I have always had a strong passion for computer science. It started 
          with robotics teams and transfered to the classroom. From there to personal projects 
          and industry experience. I love combining my analytical skills
          and creativity to create useful software to help real people.
          Please use the LinkedIn or email buttons above contact me with any questions."/>
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
          description = "I love playing with my dog, backpacking, and playing club ultimate frisbee. 
          I have played on the  team for all four years of college. The chemistry required to 
          beat the other schools we play has instilled in me an appriciation of teamwork.
          I also enjoy the adventure of backpacking in the mountains and the rigor has taught me
          to maintain pereseverance."/>
        <Footer/> 
        
      </div>
    );
  }
}

export default App;
