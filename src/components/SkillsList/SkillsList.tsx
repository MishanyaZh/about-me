import React from 'react';

import {
  Title,
  DownPageItems,
  SkillList,
  Date,
  SKill,
  SubList,
  Role,
  Box,
  Subtitle,
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
  role?: string;
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
            <Subtitle>[ {item.subtitle} ]</Subtitle>
            {!item.role && <Date>{item.date}</Date>}

            <Box hasRole={!!item.role}>
              <Role>{item.role}</Role>
              {!!item.role && <Date>{item.date}</Date>}
            </Box>

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
