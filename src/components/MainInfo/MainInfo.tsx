import React from 'react';
import photo from '../../images/about-me-photo.jpg';
import { MainInfoBox, Summary, SummarySkills, Img } from './MainInfo.styled';

const MainInfo = () => {
  return (
    <MainInfoBox>
      <h1>Mykhailo Zholondkovskyi</h1>
      <h2>React Developer</h2>

      <Img src={photo} alt="about-me-photo" />

      <Summary>
        I want to be part of a friendly and professional team in which I could
        develop my skills as a Front End Developer. I have knowledge of{' '}
        <SummarySkills>
          HTML, CSS, JavaScript, TypeScript, and React.{' '}
        </SummarySkills>
        I'm currently studying <SummarySkills>Next and Tailwind</SummarySkills>.
        I have experience of teamwork using <SummarySkills>Scrum</SummarySkills>{' '}
        methodology and <SummarySkills>Agile</SummarySkills> philosophy. I am
        fast learner and can quickly integrate into a team so I can provide
        value to the company and the customers.
      </Summary>
    </MainInfoBox>
  );
};
export default MainInfo;
