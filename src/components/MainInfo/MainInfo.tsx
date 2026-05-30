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
        Frontend Developer with 4 years of commercial experience and 5 years in
        software development overall, including 8+ years of working in Polish
        environments. Specialized in building scalable EdTech solutions using
        React, Next.js, TypeScript, and GraphQL. Delivered high-impact features
        including course generation systems, subscription management, and
        analytics dashboards, accelerating content creation by 4x and improving
        development velocity by 20–30% through AI-assisted development.
      </Summary>
    </MainInfoBox>
  );
};
export default MainInfo;
