import React from 'react';
import foto from '../../images/about-me-foto.jpg';
import { MainInfoBox, Summary, SummarySkills, Img } from './MainInfo.styled';

const MainInfo = () => {
  return (
    <MainInfoBox>
      <h1>Mykhailo Zholondkovskyi</h1>
      <h2>Full Stack Developer</h2>

      <Img src={foto} alt="about-me-foto" />

      <Summary>
        I want to be part of a friendly and professional team in which I could
        develop my skills as a Front End Developer. I have knowledge of{' '}
        <SummarySkills>HTML, CSS, JavaScript, React, and Node. </SummarySkills>
        I'm currently studying <SummarySkills>TypeScript</SummarySkills>. I have
        experience of teamwork using <SummarySkills>Scrum</SummarySkills>{' '}
        methodology and <SummarySkills>Agile</SummarySkills> philosophy. I am
        fast learner and can quickly integrate into a team so I can provide
        value to the company and the customers.
      </Summary>
    </MainInfoBox>
  );
};
export default MainInfo;
