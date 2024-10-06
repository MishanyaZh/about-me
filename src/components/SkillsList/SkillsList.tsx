import React from 'react';

import {
  Title,
  DownPageItems,
  SkillList,
  Date,
  SKill,
  SubList,
} from './SkillsList.styled';
interface IProps {
  SKILLS?: string[];
  EXPERIENCE?: ExperienceTypes[];
  title: string;
  type: string;
  hasListStyle?: boolean;
}
interface ExperienceTypes {
  subtitle: string;
  date: string;
  skills: string[];
}

const SkillsList = ({
  SKILLS,
  EXPERIENCE,
  title,
  type,
  hasListStyle,
}: IProps) => {
  const CustomSubList = hasListStyle ? SubList : SkillList;
  return (
    <SkillList>
      <Title>{title}</Title>
      {type === 'SKILLS' &&
        SKILLS?.map((item, index) => (
          <li key={index}>
            <h4>{item}</h4>
          </li>
        ))}
      {type === 'EXPERIENCE' &&
        EXPERIENCE?.map((item, index) => (
          <DownPageItems key={index}>
            <h4>[ {item.subtitle} ]</h4>
            <Date>{item.date}</Date>
            <CustomSubList>
              {item.skills.map((skill, index) => (
                <SKill key={index}>{skill}</SKill>
              ))}
            </CustomSubList>
          </DownPageItems>
        ))}
    </SkillList>
  );
};

export default SkillsList;
