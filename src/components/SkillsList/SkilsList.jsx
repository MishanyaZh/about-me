import React from 'react';

import { Title, DownPageItems, SkillList } from './SkillsList.styled';

const SkillsList = ({ SKILLS, title, type }) => {
  return (
    <SkillList>
      <Title>{title}</Title>
      {type !== 'DownPage' &&
        SKILLS.map((item, index) => (
          <li key={index}>
            <h5>{item}</h5>
          </li>
        ))}
      {type === 'DownPage' &&
        SKILLS.map((item, index) => (
          <DownPageItems key={index}>
            <h5>{item.subtitle}</h5>
            <span>{item.date}</span>
            <ul>
              {item.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </DownPageItems>
        ))}
    </SkillList>
  );
};

export default SkillsList;
