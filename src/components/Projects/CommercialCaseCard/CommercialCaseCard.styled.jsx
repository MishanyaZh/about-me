import styled from '@emotion/styled';

export const CaseWrapper = styled.article`
  margin: 12px auto 18px;
  width: calc(100% - 20px);
  max-width: 980px;
  border-radius: 10px;
  border: 1px solid var(--text-color-alpha-50);
  box-shadow: var(--box-shadow-2);
  background: linear-gradient(
    135deg,
    var(--case-gradient-start) 0%,
    var(--case-gradient-end) 100%
  );
  overflow: hidden;
`;

export const CaseBody = styled.div`
  padding: 18px 16px;

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

export const CaseBadge = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid var(--text-color-alpha-50);
  color: var(--text-acc);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const CaseTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--case-text-color);
  line-height: 1.25;
`;

export const CaseSummary = styled.p`
  margin: 12px 0 14px;
  line-height: 1.45;
  color: var(--case-text-color);
  opacity: 0.94;
`;

export const HighlightsList = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  gap: 8px;
`;

export const Highlight = styled.li`
  position: relative;
  padding-left: 14px;
  color: var(--case-text-color);
  opacity: 0.9;
  line-height: 1.35;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--text-acc);
  }
`;

export const ActionsRow = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const CaseLink = styled.a`
  display: inline-block;
  padding: 8px 12px;
  border-radius: 6px;
  text-decoration: none;
  border: 1px solid var(--text-color);
  color: var(--text-color);
  background: var(--text-color-alpha-12);
  transition: background-color 0.35s ease-out, color 0.35s ease-out,
    border-color 0.35s ease-out;

  &:hover,
  &:focus-visible {
    color: var(--text-acc);
    border-color: var(--text-acc);
    background: var(--color-theme-card);
  }
`;
