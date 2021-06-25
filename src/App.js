import React from "react";
import Header from "./Header";
import Spacer from "./Spacer";
import InfoBlock from "./InfoBlock";
import Experience from "./Experience";
import Skills from "./Skills";
import Footer from "./Footer";
import Contact from "./Contact";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Contact></Contact>

        <Spacer />

        <InfoBlock
          title="About me"
          image="https://i.imgur.com/gayVnOW.jpg"
          description="I have always had a strong passion for computer science. It started 
          with robotics teams and transferred to the classroom. From there, my interest carried into personal projects 
          and industry experience. I love combining analytical skills and creativity to create software to
          solve real problems. Please use the LinkedIn or email buttons above to contact me with any questions."
        />
        <Spacer />

        <InfoBlock
          title="Education"
          image="https://i.imgur.com/iXD1Pug.png"
          description="Baylor Univeristy's computer science program gave me a strong foundation with
          17 computer science classes including data structures, algorithms, software engineering,
          networking, operating systems, databases, and cyber security. The classes also strengthened
          my collaboration skills with 8 group projects."
        />
        <Spacer />

        <Experience title="Summer Internships" />

        <Skills title="Technologies, Skills, and Languages" />
        <Spacer />

        <InfoBlock
          title="Personal Hobbies"
          image="https://i.imgur.com/Tv7QXgI.png"
          description="I love playing with my dog, backpacking, and playing ultimate frisbee. 
          Developing a strong sense of chemistry with my college team instilled in me an appreciation of teamwork.
          I also enjoy the adventure of backpacking in the mountains and the rigor has taught me
          to maintain perseverance."
        />
        <Footer />
      </div>
    );
  }
}

export default App;
