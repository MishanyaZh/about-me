import React from 'react';

import { Item, List } from './ProjectsList.styled';
const ProjectsList = ({ PROJECTS }) => {
  return (
    <List>
      {PROJECTS.map((item, index) => (
        <Item key={index}>
          <a href={item.link} alt="kapusta" target="_blank" rel="noreferrer">
            <h3>{item.subtitle}</h3>
          </a>
          <span>{item.technologies}</span>
          <span>{item.description}</span>
        </Item>
      ))}
    </List>
  );
};

export default ProjectsList;
