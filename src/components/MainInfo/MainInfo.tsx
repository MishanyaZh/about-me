import React from 'react';
import photo from '../../images/about-me-photo.jpg';
import { MainInfoBox, Summary, Img } from './MainInfo.styled';

const MainInfo = () => {
  return (
    <MainInfoBox>
      <h1>Mykhailo Zholondkovskyi</h1>
      <h2>Front-End JS/TS Developer (React / Next.js)</h2>

      <Img src={photo} alt="about-me-photo" />

      <Summary>
        Front-End Developer with 4 years of commercial experience (5 years in
        IT) and a total of 8+ years of experience working in Polish
        environments. Expert in building scalable EdTech solutions using React,
        TypeScript, and GraphQL. Proven track record of delivering high business
        value: from attracting investors to optimizing development speed by 4x.
        Strong cultural fit for Polish and international teams, with a focus on
        stable, long-term product growth and AI-assisted efficiency.
      </Summary>
    </MainInfoBox>
  );
};
export default MainInfo;
