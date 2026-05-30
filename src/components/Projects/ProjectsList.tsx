import React from 'react';

import {
  Item,
  List,
  Link,
  ActionLink,
  Span,
  TitleCard,
  Technologies,
} from './ProjectsList.styled';

interface IProps {
  PROJECTS: IProjects[];
}

interface IProjects {
  subtitle: string;
  technologies: string;
  link: string;
  description: string;
}

const ProjectsList = ({ PROJECTS }: IProps) => {
  return (
    <List>
      {PROJECTS.map(item => (
        <Item key={item.link}>
          <Link href={item.link} target="_blank" rel="noopener noreferrer">
            <TitleCard>{item.subtitle}</TitleCard>
          </Link>

          <Technologies>{item.technologies}</Technologies>

          <ActionLink
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            data-project-action="true"
          >
            Open
          </ActionLink>

          <Span>{item.description}</Span>
        </Item>
      ))}
    </List>
  );
};

export default ProjectsList;
