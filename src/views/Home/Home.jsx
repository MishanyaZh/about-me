import React, { useEffect } from 'react';

import MainInfo from '../../components/MainInfo/MainInfo';
import SkillsList from '../../components/SkillsList/SkillsList.tsx';

import {
  TECHNICAL_SKILLS,
  SOFT_SKILLS,
  LANGUAGES,
  EDUCATION,
  WORK_EXPERIENCE,
} from '../../Skills/Skills.js';

import {
  FrontPage,
  TechnicalSkills,
  SoftSkills,
  DownPage,
  EducationSkills,
  ExperienceSkills,
  NavLinkBox,
} from './Home.styled';
import { NavigtionNavLink } from '../../components/Navigation/Navigation.styled';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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

      <NavLinkBox>
        <NavigtionNavLink to="/portfolio">Portfolio</NavigtionNavLink>
      </NavLinkBox>

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
    </>
  );
};

export default Home;
