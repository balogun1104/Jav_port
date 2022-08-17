import React from 'react';
import{Link} from 'react-router-dom';
import Image from '../image/about.JPG';
import './App.css';

function Home() {
  return (
    <div className=''>
      <section className="Home" id="home">
        <section className="home" id="home">
          <div className="home-content">
            <div className="text">
              <div className="text-one">Hello,</div>
              <div className="text-two">I'm Damassoh Japhet</div>
              <div className="text-three">Front-End Developer</div>
              <div className="text-four">From Lagos, Nigeria</div>
            </div>
            <div className="button">
              <button>
                <Link to="./Contact">Hire Me</Link>
              </button>
            </div>
          </div>
        </section>
      </section>

      <section className="about" id="about">
        <div className="content">
          <div className="title"><span>About Me</span></div>
        <div className="about-details">
          <div className="left">
          <img src={Image} alt="Japhet" />
          </div>
          <div className="right">
            <div className="topic">Designing Is My Passion</div>
            <p>I'm a front-end developer who knows how to use code to translate design into reality.
                 I have sufficient corporate experience and great technical aptitude for challenging web-based solutions.
                  I'm skilled at using React to write well-designed, testable, and efficient code.
                   I'm also highly skilled in JavaScript, React, HTML, and CSS. 
                   I'm determined to learn a lot and make a significant contribution to the goals and objectives of any organisation I work with.
            </p>
            <div className="button">
                <a href="https://drive.google.com/file/d/15FR9CThWun9R0vDttWSGrDQn8h4Btfne/view?usp=sharing">Download Resume</a>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section class="skills" id="skills">
        <div class="content">
          <div class="title"><span>My Skills</span></div>
          <div class="skills-details">
            <div class="text">
              <div class="topic"> <strong>Skills Reflects Our Knowledge</strong></div>
              <p>An empowered organisation is one in which individuals have the knowledge, skill, desire, and opportunity to personally
                 succeed in a way that leads to collective organisational success.</p>
              <div class="experience">
                <div class="num">1</div>
                <div class="exp">Years Of <br /> Experience</div>
              </div>
            </div>
            <div class="boxes">
              <div class="box">
                <div class="topic">HTML</div>
                <div class="per">90%</div>
              </div>
              <div class="box">
                <div class="topic">CSS</div>
                <div class="per">80%</div>
              </div>
              <div class="box">
                <div class="topic">JavScript</div>
                <div class="per">70%</div>
              </div>
              <div class="box">
                <div class="topic">React.js</div>
                <div class="per">50%</div>
              </div>
            </div>
          </div>
        </div>
       </section>

       <section className="services" id="services">
        <div className="content">
          <div className="title"><span>My Services</span></div>
          <div className="boxes">
            <div className="box">
            <div className="topic text-primary">Web Devlopment</div>
            <p>
              HTML/CSS/JS,
              Git and Github,
              Browser DevTools,
              Bootstrap/ React,
              Programming Languages,
              Problem Solving and Searching.
             </p>
          </div>
            <div className="box">
            <div className="topic text-primary">Researcher</div>
            <p>Project Management,
              Handling Budgets,
              Team Leading/Managing,
              IT skills.</p>
          </div>
        </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="content">
          <div className="title"><span>Contact Me</span></div>
          <div className="text">
            <div className="topic">Have Any Project?</div>
            <p> <strong>Gmail - Japhetdamassoh@gmail.com</strong></p>
            <p> <strong>WhatsApp - 08146360709</strong></p>
          </div>
          <div className="button">
            <a href="https://wa.me/2348146360709">Let's Chat</a>
          </div>
        </div>
      </section>

     <footer>
       <div className="text">
        <span><a href="https://github.com/Japhetaline">Github</a></span> <br />
         <span>Japhetaline | &#169; 2022 All Rights Reserved</span>
       </div>
     </footer>
    </div>


  )
}

export default Home