import React from 'react';
import foto from '../../images/about-me-foto.jpg';
import { Summary, Img } from './MainInfo.styled';

const MainInfo = () => {
  console.log(foto);
  return (
    <div>
      <h1>Mykhailo Zholondkovskyi</h1>
      <h2>junior Full Stack Developer</h2>
      <div>
        <Img src={foto} alt="about-me-foto" />
      </div>
      <Summary>
        I am fast learner and can quickly integrate into a team so I can provide
        value to the company and the customers.
      </Summary>
    </div>
  );
};
export default MainInfo;
