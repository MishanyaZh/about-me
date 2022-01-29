import React from 'react';
import { Link } from 'react-router-dom';
import { FrontPage, Summary, TechnicalSkills, SoftSkills } from './Home.styled';

export default function Home() {
  return (
    <main>
      <FrontPage>
        <div>
          <h1>Mykhailo Zholondkovskyi</h1>
          <h2>junior Full Stack Developer</h2>
          <div style={{ width: '200px', height: '200px', margin: '0 auto' }}>
            foto
          </div>
          <Summary>
            I am fast learner and can quickly integrate into a team so I can
            provide value to the company and the customers.
          </Summary>
        </div>

        <TechnicalSkills>
          <ul>
            <h3>TECHNICAL SKILLS</h3>
            <li>JavaScript </li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>GIT</li>
            <li>WebPack</li>
            <li>Redux</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Scrum</li>
            <li>Agile</li>
            <li>NPM</li>
            <li>REST API</li>
          </ul>
        </TechnicalSkills>

        <SoftSkills>
          <ul>
            <h3>Soft Skills</h3>
            <li>Team player</li>
            <li>Disciplined</li>
            <li>Motivated</li>
            <li>Communication</li>
          </ul>

          <ul>
            <h3>LANGUAGES</h3>
            <li>Polish – pre-intermediate</li>
            <li>English – pre-intermediate</li>
            <li>Ukrainian – native</li>
            <li>Russian – native</li>
          </ul>
        </SoftSkills>
      </FrontPage>

      <Link to="/portfolio">Portfolio</Link>
    </main>
  );
}
