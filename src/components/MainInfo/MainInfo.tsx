import React from 'react';
import photo from '../../images/about-me-photo.jpg';
import { MainInfoBox, Summary, Img } from './MainInfo.styled';

const MainInfo = () => {
  return (
    <MainInfoBox>
      <h1>Mykhailo Zholondkovskyi</h1>
      <h2>Frontend Developer | React | Next.js | TypeScript</h2>

      <Img src={photo} alt="Portrait of Mykhailo Zholondkovskyi" />

      <Summary>
        Frontend React Developer with 4 years of commercial experience building
        complex web applications. I take ownership of product areas end-to-end:
        from designing systems from scratch and proposing architecture to
        improving existing solutions. On a production EdTech platform used by
        thousands of users, I delivered about 50% of frontend functionality,
        including reusable data tables, analytics dashboards, onboarding flows,
        and subscription/payment features.
      </Summary>
    </MainInfoBox>
  );
};
export default MainInfo;
