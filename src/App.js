import './App.css';
import emailLogo from "./Images/mail.png"
import linkedInLogo from "./Images/linkedin.png"
import githubLogo from "./Images/github.png"
import instagramLogo from "./Images/instagram.png"
import facebookLogo from "./Images/facebook.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Animated} from "react-animated-css";
import image from "./Images/tobias-kebernik-Sk9NawVfij8-unsplash.jpg"
import {Parallax} from "react-parallax";
import malaysia from "./Images/esmonde-yong--9B08uduMyY-unsplash.jpg"
import pythonLogo from "./Images/py.png"
import jsLogo from "./Images/javascript.png"
import mongoLogo from "./Images/Logo_RGB_Spring-Green.png"
import reactLogo from "./Images/physics.png"
import firstHackathon from "./Images/firsthackathon.jpg"
import firstHackathon2 from "./Images/clairvoyance2.jpg"
import { CCarousel,CCarouselItem,CImage } from '@coreui/react'
import serafina1 from "./Images/serafina1.jpeg"
import serafina2 from "./Images/serafina2.jpeg"
import serafina3 from "./Images/serafina3.jpeg"
import serafina4 from "./Images/serafina4.jpeg"

const insideStyles = {
  textAlign:"center",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

function App() {
  return (
    <div className="App">

        {/*"----------------------------Navbar---------------------------------"*/}
        <div class="fixed-top">
        <Navbar bg="light" variant="light">
          <Container>
          <Navbar.Brand href="#home">Josh Heng</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="/hire-me"><u>Hire me</u></Nav.Link>
          </Nav>
          <a class="langLink" href="/">English</a>
          <p class="separator">|</p>
          <a class="langLink" href="/lang=cn">中文（简体）</a>
          </Container>
        </Navbar>
        </div>
        {/*"---------------------------------------------------------------------"*/}

      
      {/*"--------------------------------Home-------------------------------------"*/}
      <Parallax className="parallaxImage" bgImage={image}>
      <div>
      <div id="home" class="buffer"></div>
      <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={3000} animationOutDuration={500} isVisible={true}>
      <h1 class="title">Hi! I'm Josh,</h1>
      </Animated>
      <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={6000} animationOutDuration={500} isVisible={true}>
      <h2 class="intro">Computing and Information Systems/ Data Science Student</h2>
      </Animated>
      <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={7000} animationOutDuration={500} isVisible={true}>
      <h2 class="intro2">University of Melbourne</h2>
      </Animated>
      </div>
      </Parallax>
      {/*"----------------------------------------------------------------------------"*/}



      {/*"----------------------------------About--------------------------------------"*/}
      <div id="about" >
        <Parallax
        className="parallaxImage"
        bgImage={malaysia}
        strength={200}
        renderLayer={(percentage) => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(255, 125, 0, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",
              width: percentage * 900,
              height: percentage * 900
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 800, width: 870 }}>
        <div style={insideStyles} class="insideText">
        <h1>About me</h1>
        <p>Currently a first year undergraduate student looking to major in both Data Science and Computing at the University of Melbourne</p>
        <h4><u>My current stack</u></h4>
          <div>
            <img class="aboutlogo" src={pythonLogo} alt="python logo"></img>
            <img class="aboutlogo" src={jsLogo} alt="javascript logo"></img>
            <img class="mongologo" src={mongoLogo} alt="mongo logo"></img>
            <img class="aboutlogo" src={reactLogo} alt="react logo"></img>


          </div>
        </div>
      </div>
    </Parallax>
        
      </div>
      {/*"----------------------------------------------------------------------------"*/}


      {/*"------------------------------Projects----------------------------------------"*/}
      <div class="projectsContainer">
        <div id="projects" class="projects">
          <h2 class="projTitle">My Projects</h2>
          <p class="description">Although I'm still fairly new to programming, I have built a few projects in hackathons and by myself!</p>
          <div>
            <div class="FirstHackathon">
            <h4 style={{textAlign: "center", paddingTop: 20}}>My First Hackathon</h4>
            <p style={{textAlign: "center", paddingTop: 20}}>A web application used to determine the reliability of a news source.</p>
            <p style={{textAlign: "center"}}>Made with Flask, HTMl, CSS and MongoDB.</p>
            <CCarousel controls indicators>
              <CCarouselItem>
                <a rel="noreferrer" href="https://devpost.com/software/clairvoyance-z6xr5d?ref_content=my-projects-tab&ref_feature=my_projects" target="_blank">
                <CImage className="d-block w-100" src={firstHackathon} alt="slide 1" />
                </a>
              </CCarouselItem>
              <CCarouselItem>
                <a rel="noreferrer" href="https://devpost.com/software/clairvoyance-z6xr5d?ref_content=my-projects-tab&ref_feature=my_projects" target="_blank">
                <CImage className="d-block w-100" src={firstHackathon2} alt="slide 3" />
                </a>
              </CCarouselItem>
            </CCarousel>


              <h4 style={{textAlign: "center", paddingTop: 20}}>My Second Hackathon</h4>
            <p style={{textAlign: "center", paddingTop: 20}}>A static portfolio website for my hackathon team.</p>
            <p style={{textAlign: "center"}}>Made with Vanilla Javascript, HTML and CSS.</p>
            <CCarousel controls indicators>
              <CCarouselItem>
                <a rel="noreferrer" href="https://github.com/yuzejosh/serafina" target="_blank">
                <CImage className="d-block w-100" src={serafina1} alt="slide 1" />
                </a>
              </CCarouselItem>
              <CCarouselItem>
                <a rel="noreferrer" href="https://github.com/yuzejosh/serafina" target="_blank">
                <CImage className="d-block w-100" src={serafina2} alt="slide 1" />
                </a>
              </CCarouselItem>
              <CCarouselItem>
                <a rel="noreferrer" href="https://github.com/yuzejosh/serafina" target="_blank">
                <CImage className="d-block w-100" src={serafina3} alt="slide 1" />
                </a>
              </CCarouselItem>
              <CCarouselItem>
                <a rel="noreferrer" href="https://github.com/yuzejosh/serafina" target="_blank">
                <CImage className="d-block w-100" src={serafina4} alt="slide 1" />
                </a>
              </CCarouselItem>
            </CCarousel>
            <h4 style={{textAlign: "center", paddingTop: 40}}>And of course, this website!</h4>
            </div>
          </div>
        </div>
      </div>

      {/*"----------------------------------------------------------------------------"*/}
      


      {/*"------------------------------Contact----------------------------------------"*/}
      <div id="contact" class="moreInfo">

          <a href="mailto:josherheng@gmail.com?subject=Enquiry%3A">
          <img class="Logo" src={emailLogo} alt="email logo"></img>
          </a>

          <a rel="noreferrer" href="https://www.linkedin.com/in/josh-heng-1b6a40133/" target="_blank">
          <img class="Logo" src={linkedInLogo} alt="LinkedIn logo"></img>
          </a>

          <a rel="noreferrer" href="https://github.com/yuzejosh" target="_blank">
          <img class="Logo" src={githubLogo} alt="LinkedIn logo"></img>
          </a>

          <a rel="noreferrer" href="https://www.instagram.com/josherhengg/" target="_blank">
          <img class="Logo" src={instagramLogo} alt="email logo"></img>
          </a>
          
          <a rel="noreferrer" href="https://www.facebook.com/josher.heng" target="_blank">
          <img class="Logo" src={facebookLogo} alt="LinkedIn logo"></img>
          </a>

      </div>
    <footer class="footer">Made by Josh 2022</footer>
      {/*"-----------------------------------------------------------------------------------------"*/}

    </div>
  );
}

export default App;
