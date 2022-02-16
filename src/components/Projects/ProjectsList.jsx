import React from 'react';

import {
  Item,
  List,
  Link,
  Button,
  Span,
  TitleCard,
  Technologies,
} from './ProjectsList.styled';

const ProjectsList = ({ PROJECTS }) => {
  return (
    <List>
      {PROJECTS.map((item, index) => (
        <Item key={index}>
          <Link
            href={item.link}
            alt={item.subtitle}
            target="_blank"
            rel="noreferrer"
          >
            <TitleCard>{item.subtitle}</TitleCard>
          </Link>

          <Technologies>{item.technologies}</Technologies>

          <Link
            href={item.link}
            alt={item.subtitle}
            target="_blank"
            rel="noreferrer"
          >
            <Button>Open</Button>
          </Link>

          <Span>{item.description}</Span>
        </Item>
      ))}
    </List>
  );
};

export default ProjectsList;
