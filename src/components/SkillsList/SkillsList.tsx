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
  ShortSKILLS: string[];
  SKILLS: ISkills[];
  title: string;
  type: string;
  hasListStyle?: boolean;
}
interface ISkills {
  subtitle: string;
  date: string;
  skills: string[];
}

const SkillsList = ({
  ShortSKILLS,
  SKILLS,
  title,
  type,
  hasListStyle,
}: IProps) => {
  const CustomSubList = hasListStyle ? SubList : SkillList;
  return (
    <SkillList>
      <Title>{title}</Title>
      {type !== 'DownPage' &&
        ShortSKILLS.map((item, index) => (
          <li key={index}>
            <h4>{item}</h4>
          </li>
        ))}
      {type === 'DownPage' &&
        SKILLS.map((item, index) => (
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
