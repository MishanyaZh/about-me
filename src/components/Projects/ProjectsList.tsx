import React from 'react';
import { PortfolioProject, TECHNOLOGY_LABELS } from '../../Skills/projects';

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
  PROJECTS: PortfolioProject[];
}

const ProjectsList = ({ PROJECTS }: IProps) => {
  return (
    <List>
      {PROJECTS.map(item => {
        const isCommercial = Boolean(item.isCommercial);
        const technologiesLabel = item.technologies
          .map(technology => TECHNOLOGY_LABELS[technology])
          .join(', ');

        return (
          <Item key={item.id} data-commercial={isCommercial ? 'true' : 'false'}>
            {isCommercial && <CommercialBadge>Commercial</CommercialBadge>}
            <Link
              href={item.links.primary}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TitleCard>{item.subtitle}</TitleCard>
            </Link>

            <Technologies>[{technologiesLabel}]</Technologies>

            <ActionLink
              href={item.links.primary}
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
