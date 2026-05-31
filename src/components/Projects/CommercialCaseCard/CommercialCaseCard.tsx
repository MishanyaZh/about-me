import React from 'react';
import { CommercialCaseData } from '../../../Skills/projects';
import {
  ActionsRow,
  CaseBadge,
  CaseBody,
  CaseLink,
  CaseSummary,
  CaseTitle,
  CaseWrapper,
  Highlight,
  HighlightsList,
} from './CommercialCaseCard.styled';

interface CommercialCaseCardProps {
  caseData: CommercialCaseData;
}

const CommercialCaseCard = ({ caseData }: CommercialCaseCardProps) => {
  const { title, summary, overviewLink, platformLink, highlights } = caseData;

  return (
    <CaseWrapper>
      <CaseBody>
        <CaseBadge>Commercial Product</CaseBadge>
        <CaseTitle>{title}</CaseTitle>
        <CaseSummary>{summary}</CaseSummary>

        <HighlightsList>
          {highlights.map(highlight => (
            <Highlight key={highlight}>{highlight}</Highlight>
          ))}
        </HighlightsList>

        <ActionsRow>
          <CaseLink
            href={overviewLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Platform overview
          </CaseLink>
          <CaseLink
            href={platformLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Product platform
          </CaseLink>
        </ActionsRow>
      </CaseBody>
    </CaseWrapper>
  );
};

export default CommercialCaseCard;
