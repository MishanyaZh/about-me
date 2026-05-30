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

type SkillsListType = 'SKILLS' | 'EXPERIENCE';

interface IProps {
  SKILLS?: string[];
  EXPERIENCE?: ExperienceTypes[];
  title: string;
  type: SkillsListType;
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
        SKILLS?.map(item => (
          <li key={item}>
            <h4>{item}</h4>
          </li>
        ))}
      {type === 'EXPERIENCE' &&
        EXPERIENCE?.map(item => (
          <DownPageItems key={`${item.subtitle}-${item.date}`}>
            <Subtitle>[ {item.subtitle} ]</Subtitle>
            {!item.role && <Date>{item.date}</Date>}

            <Box hasRole={!!item.role}>
              <Role>{item.role}</Role>
              {!!item.role && <Date>{item.date}</Date>}
            </Box>

            <CustomSubList>
              {item.skills.map(skill => (
                <SKill key={skill}>{skill}</SKill>
              ))}
            </CustomSubList>
          </DownPageItems>
        ))}
    </SkillList>
  );
};

export default SkillsList;
