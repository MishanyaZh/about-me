import React, { useEffect } from 'react';

import MainInfo from '../../components/MainInfo/MainInfo';
import SkillsList from '../../components/SkillsList/SkillsList';

import {
  TECHNICAL_SKILLS,
  SOFT_SKILLS,
  LANGUAGES,
  EDUCATION_EXPERIENCE,
  WORK_EXPERIENCE,
  OTHER_WORK_EXPERIENCE,
  OTHER_EDUCATION_EXPERIENCE,
} from '../../Skills/Skills.js';

import {
  FrontPage,
  TechnicalSkills,
  SoftSkills,
  Experience,
  EducationSkills,
  ExperienceSkills,
  NavLinkBox,
} from './Home.styled';
import { NavigationNavLink } from '../../components/Navigation/Navigation.styled';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <FrontPage>
        <MainInfo />

        <TechnicalSkills>
          <SkillsList
            SKILLS={TECHNICAL_SKILLS}
            title={'TECHNICAL SKILLS'}
            type="SKILLS"
          />
        </TechnicalSkills>

        <SoftSkills>
          <SkillsList
            SKILLS={SOFT_SKILLS}
            title={'SOFT SKILLS'}
            type="SKILLS"
          />
          <SkillsList SKILLS={LANGUAGES} title={'LANGUAGES'} type="SKILLS" />
        </SoftSkills>
      </FrontPage>

      <NavLinkBox>
        <NavigationNavLink to="/portfolio">Portfolio</NavigationNavLink>
      </NavLinkBox>

      <Experience>
        <ExperienceSkills>
          <SkillsList
            hasListStyle={true}
            EXPERIENCE={WORK_EXPERIENCE}
            title={'WORK EXPERIENCE'}
            type="EXPERIENCE"
          />
          <SkillsList
            hasListStyle={true}
            EXPERIENCE={OTHER_WORK_EXPERIENCE}
            title={'OTHER WORK EXPERIENCE'}
            type="EXPERIENCE"
          />
        </ExperienceSkills>

        <EducationSkills>
          <SkillsList
            EXPERIENCE={EDUCATION_EXPERIENCE}
            title={'EDUCATION'}
            type="EXPERIENCE"
          />
          <SkillsList
            EXPERIENCE={OTHER_EDUCATION_EXPERIENCE}
            title={'OTHER EDUCATION'}
            type="EXPERIENCE"
          />
        </EducationSkills>
      </Experience>
    </>
  );
};

export default Home;
