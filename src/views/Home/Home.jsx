import React from 'react';
import { Link } from 'react-router-dom';

import MainInfo from '../../components/MainInfo/MainInfo';
import SkillsList from '../../components/SkillsList/SkilsList';

import {
  FrontPage,
  TechnicalSkills,
  SoftSkills,
  DownPage,
} from './Home.styled';
import {
  TECHNICAL_SKILLS,
  SOFT_SKILLS,
  LANGUAGES,
  EDUCATION,
  WORK_EXPERIENCE,
} from '../../Skills/Skills';

const Home = () => {
  return (
    <div>
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
      <Link to="/portfolio">Portfolio</Link>
      <DownPage>
        <SkillsList SKILLS={EDUCATION} title={'EDUCATION'} type="DownPage" />
        <SkillsList
          SKILLS={WORK_EXPERIENCE}
          title={'WORK EXPERIENCE'}
          type="DownPage"
        />
      </DownPage>
    </div>
  );
};

export default Home;
