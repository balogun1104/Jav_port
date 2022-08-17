import React from 'react';
import './App.css';

function Skills() {
  return (
    <div>
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
    </div>
  )
}

export default Skills