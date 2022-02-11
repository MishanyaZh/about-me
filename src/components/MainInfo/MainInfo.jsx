import React from 'react';
import foto from '../../images/about-me-foto.jpg';
import { MainInfoBox, Summary, Img, ImgBox } from './MainInfo.styled';

const MainInfo = () => {
  return (
    <MainInfoBox>
      <h1>Mykhailo Zholondkovskyi</h1>
      <h2>junior Full Stack Developer</h2>
      <ImgBox>
        <Img src={foto} alt="about-me-foto" />
      </ImgBox>
      <Summary>
        I want to be part of a friendly and professional team in which I could
        develop my skills as a Front End Developer. I have knowledge of HTML,
        CSS, JavaScript, React, and Node. I am fast learner and can quickly
        integrate into a team so I can provide value to the company and the
        customers.
      </Summary>
    </MainInfoBox>
  );
};
export default MainInfo;
