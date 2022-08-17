import React from 'react';
import './App.css';

function Services() {
  return (
    <div>
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
    </div>
  )
}

export default Services