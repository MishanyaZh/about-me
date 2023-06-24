import React, { useEffect } from 'react';

import MainInfo from '../../components/MainInfo/MainInfo';
import SkillsList from '../../components/SkillsList/SkillsList';

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
            ShortSKILLS={TECHNICAL_SKILLS}
            title={'TECHNICAL SKILLS'}
            type="TopPage"
            SKILLS={[]}
          />
        </TechnicalSkills>

        <SoftSkills>
          <SkillsList
            ShortSKILLS={SOFT_SKILLS}
            title={'SOFT SKILLS'}
            type="TopPage"
            SKILLS={[]}
          />
          <SkillsList
            ShortSKILLS={LANGUAGES}
            title={'LANGUAGES'}
            type="TopPage"
            SKILLS={[]}
          />
        </SoftSkills>
      </FrontPage>

      <NavLinkBox>
        <NavigationNavLink to="/portfolio">Portfolio</NavigationNavLink>
      </NavLinkBox>

      <DownPage>
        <ExperienceSkills>
          <SkillsList
            SKILLS={WORK_EXPERIENCE}
            title={'WORK EXPERIENCE'}
            type="DownPage"
            ShortSKILLS={[]}
          />
        </ExperienceSkills>

        <EducationSkills>
          <SkillsList
            SKILLS={EDUCATION}
            title={'EDUCATION'}
            type="DownPage"
            ShortSKILLS={[]}
          />
        </EducationSkills>
      </DownPage>
    </>
  );
};

export default Home;
