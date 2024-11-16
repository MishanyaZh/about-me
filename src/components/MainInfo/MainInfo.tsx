import React from 'react';
import photo from '../../images/about-me-photo.jpg';
import { MainInfoBox, Summary, Img } from './MainInfo.styled';

const MainInfo = () => {
  return (
    <MainInfoBox>
      <h1>Mykhailo Zholondkovskyi</h1>
      <h2>JavaScript React Developer</h2>
      <h3>Front-End | Full-Stack</h3>

      <Img src={photo} alt="about-me-photo" />

      <Summary>
        Developer with commercial experience in building interactive platforms
        and modern web applications. Specialized in creating efficient and
        user-friendly interfaces and solving complex UI challenges using modern
        technologies. Actively practicing Next.js and Tailwind to further
        enhance my professional skills. English level B2 – capable of discussing
        project details, resolving client issues, and providing technical
        explanations. Seeking a team where I can develop stable and functional
        solutions that meet modern technical standards, stand out in the market,
        generate profit, and attract new users, while continuing to grow as a
        developer.
      </Summary>
    </MainInfoBox>
  );
};
export default MainInfo;
