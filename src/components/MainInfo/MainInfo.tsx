import React from 'react';
import photo from '../../images/about-me-photo.jpg';
import { MainInfoBox, Summary, Img } from './MainInfo.styled';

const MainInfo = () => {
  return (
    <MainInfoBox>
      <h1>Mykhailo Zholondkovskyi</h1>
      <h2>Full Stack Developer</h2>

      <Img src={photo} alt="about-me-photo" />

      <Summary>
        I am a skilled Developer with commercial experience in building
        interactive platforms and modern web applications. I am passionate about
        creating productive, user-friendly interfaces and solving complex UI
        challenges using React in dynamic environments. Currently, I am also
        honing my skills in Next.js and Tailwind to further enhance my
        expertise. I am eager to join a friendly team where I can contribute and
        continue growing as a developer.
      </Summary>
    </MainInfoBox>
  );
};
export default MainInfo;
