import React, { useEffect } from 'react';

import MainInfo from '../../components/MainInfo/MainInfo';
import SkillsList from '../../components/SkillsList/SkilsList';

import {
  FrontPage,
  TechnicalSkills,
  SoftSkills,
  DownPage,
  EducationSkills,
  ExperienceSkills,
  PortfolioButton,
  NavLinkStyled,
} from './Home.styled';
import {
  TECHNICAL_SKILLS,
  SOFT_SKILLS,
  LANGUAGES,
  EDUCATION,
  WORK_EXPERIENCE,
} from '../../Skills/Skills';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <FrontPage>
        <MainInfo />
        <TechnicalSkills>
          <SkillsList SKILLS={TECHNICAL_SKILLS} title={'TECHNICAL SKILLS'} />
        </TechnicalSkills>
        <SoftSkills>
          <SkillsList SKILLS={SOFT_SKILLS} title={'SOFT SKILLS'} />
          <SkillsList SKILLS={LANGUAGES} title={'LANGUAGES'} />
        </SoftSkills>
      </FrontPage>
      <NavLinkStyled to="/portfolio">
        <PortfolioButton>Portfolio</PortfolioButton>
      </NavLinkStyled>
      <DownPage>
        <ExperienceSkills>
          <SkillsList
            SKILLS={WORK_EXPERIENCE}
            title={'WORK EXPERIENCE'}
            type="DownPage"
          />
        </ExperienceSkills>
        <EducationSkills>
          <SkillsList SKILLS={EDUCATION} title={'EDUCATION'} type="DownPage" />
        </EducationSkills>
      </DownPage>
    </main>
  );
};

export default Home;
