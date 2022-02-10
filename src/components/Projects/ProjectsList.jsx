import React from 'react';

import {
  Item,
  List,
  Link,
  Button,
  Span,
  TitleCard,
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

          <Span>{item.technologies}</Span>
          <Span>{item.description}</Span>

          <Link
            href={item.link}
            alt={item.subtitle}
            target="_blank"
            rel="noreferrer"
          >
            <Button>Open</Button>
          </Link>
        </Item>
      ))}
    </List>
  );
};

export default ProjectsList;
