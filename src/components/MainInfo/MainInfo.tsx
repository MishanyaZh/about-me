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
        I am a skilled React Developer with experience in developing interactive
        platforms and modern web applications. I am passionate about creating
        productive, user-friendly interfaces and solving complex UI problems in
        dynamic environments.
        <br />I specialize in building performant and scalable user interfaces
        using technologies like:{' '}
        <SummarySkills>
          {' '}
          React, JavaScript, TypeScript, GraphQL, Redux, and Styled Components.
        </SummarySkills>{' '}
        <br />
        Currently, I am actively practicing{' '}
        <SummarySkills>Next and Tailwind</SummarySkills> to further enhance my
        expertise. I am eager to join a friendly team where I can contribute and
        continue developing my skills. I have experience of teamwork using{' '}
        <SummarySkills>Scrum</SummarySkills> methodology and{' '}
        <SummarySkills>Agile</SummarySkills> philosophy. I am fast learner and
        can quickly integrate into a team so I can provide value to the company
        and the customers.
      </Summary>
    </MainInfoBox>
  );
};
export default MainInfo;
