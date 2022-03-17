import React from 'react';

import {
  Title,
  DownPageItems,
  SkillList,
  Date,
  Slill,
} from './SkillsList.styled';

// interface ITopPage {
//   skills: string[];
// }

// interface Props {
//   SKILLS: ISKILLS[] | string[];
//   title: string;
//   type?: string;
// }
// interface ISKILLS {
//   subtitle: string;
//   date: string;
//   skills: string[];
// }

const SkillsList = ({ SKILLS, title, type }) => {
  return (
    <SkillList>
      <Title>{title}</Title>
      {type !== 'DownPage' &&
        SKILLS.map((item, index) => (
          <li key={index}>
            <h4>{item}</h4>
          </li>
        ))}
      {type === 'DownPage' &&
        SKILLS.map((item, index) => (
          <DownPageItems key={index}>
            <h4>[ {item.subtitle} ]</h4>
            <Date>{item.date}</Date>
            <ul>
              {item.skills.map((skill, index) => (
                <Slill key={index}>{skill}</Slill>
              ))}
            </ul>
          </DownPageItems>
        ))}
    </SkillList>
  );
};

export default SkillsList;
