import './App.css';
import emailLogo from "/Users/josherheng/myportfolio/src/Images/mail.png"
import linkedInLogo from "/Users/josherheng/myportfolio/src/Images/linkedin.png"
import githubLogo from "/Users/josherheng/myportfolio/src/Images/github.png"
import instagramLogo from "/Users/josherheng/myportfolio/src/Images/instagram.png"
import facebookLogo from "/Users/josherheng/myportfolio/src/Images/facebook.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Animated} from "react-animated-css";

function App() {
  return (
    <div className="App">
      <div class="mainBody">

        {"----------------------------Navbar---------------------------------"}
        <div class="fixed-top">
        <Navbar bg="light" variant="light">
          <Container>
          <Navbar.Brand href="#home">Josh Heng</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <a class="langLink" href="placeholder">English</a>
          <p class="separator">|</p>
          <a class="langLink" href="placeholder">中文（简体）</a>
          </Container>
        </Navbar>
        </div>
        {"---------------------------------------------------------------------"}

      
      
      {"--------------------------------Home-------------------------------------"}
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
      {"----------------------------------------------------------------------------"}



      {"----------------------------------About--------------------------------------"}
      <div class="aboutContainer">
        <div id="about" class="about">
        <h2>About me</h2>
        </div>
      </div>
      {"----------------------------------------------------------------------------"}


      {"------------------------------Projects----------------------------------------"}
      <div id="projects" class="projects">
      <h2>My Projects</h2>
      </div>
      
      </div>
      {"----------------------------------------------------------------------------"}
      


      {"------------------------------Contact----------------------------------------"}
      <div id="contact" class="moreInfo">
        <div class="business">
          <p class="contact">Contact me:</p>
          <a href="mailto:josherheng@gmail.com?subject=Enquiry%3A">
          <img class="Logo" src={emailLogo} alt="email logo"></img>
          </a>
          <a rel="noreferrer" href="https://www.linkedin.com/in/josh-heng-1b6a40133/" target="_blank">
          <img class="Logo" src={linkedInLogo} alt="LinkedIn logo"></img>
          </a>
          <a rel="noreferrer" href="https://github.com/yuzejosh" target="_blank">
          <img class="Logo" src={githubLogo} alt="LinkedIn logo"></img>
          </a>
        </div>

      <div class="or">
          <p><b>OR</b></p>
      </div>

        <div class="personal">
          <p class="contact">Follow me on social media:</p>
          <a rel="noreferrer" href="https://www.instagram.com/josherhengg/" target="_blank">
          <img class="Logo" src={instagramLogo} alt="email logo"></img>
          </a>
          <a rel="noreferrer" href="https://www.facebook.com/josher.heng" target="_blank">
          <img class="Logo" src={facebookLogo} alt="LinkedIn logo"></img>
          </a>
        </div>

      </div>

      {"-----------------------------------------------------------------------------------------"}

    </div>
  );
}

export default App;
