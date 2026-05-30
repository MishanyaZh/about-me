import React from 'react';
import { COMMERCIAL_BADGE_LINKS } from '../../Skills/projects';

import {
  Item,
  List,
  Link,
  ActionLink,
  CommercialBadge,
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

const normalizeLink = (link: string) => link.replace(/\/$/, '');
const COMMERCIAL_LINK_SET = new Set(COMMERCIAL_BADGE_LINKS.map(normalizeLink));

const ProjectsList = ({ PROJECTS }: IProps) => {
  return (
    <List>
      {PROJECTS.map(item => {
        const isCommercial = COMMERCIAL_LINK_SET.has(normalizeLink(item.link));

        return (
          <Item
            key={item.link}
            data-commercial={isCommercial ? 'true' : 'false'}
          >
            {isCommercial && <CommercialBadge>Commercial</CommercialBadge>}
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
        );
      })}
    </List>
  );
};

export default ProjectsList;
