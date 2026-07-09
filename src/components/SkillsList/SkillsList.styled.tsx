import styled from '@emotion/styled';

export const SkillList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const SubList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style: disc;
  padding-left: 20px;
`;

export const Title = styled.h3`
  margin-bottom: 14px;
  letter-spacing: 0.04em;
  font-size: 0.96rem;
  color: var(--text-acc);
`;

export const DownPageItems = styled.li`
  margin-bottom: 18px;
  gap: 8px;
  display: flex;
  flex-direction: column;

  padding: 14px 14px 12px;
  border: 1px solid var(--surface-border);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
`;

export const Box = styled.div<{ hasRole?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ hasRole }) =>
    hasRole ? 'space-between' : 'flex-start'};
  gap: 10px;
  flex-wrap: wrap;
`;

export const Subtitle = styled.h4`
  font-size: 1rem;
  line-height: 1.35;
`;

export const Role = styled.span`
  color: var(--text-color-2);
  font-size: 0.95rem;
`;

export const Date = styled.span`
  color: var(--text-color-2);
  font-size: 0.95rem;
`;

export const SKill = styled.li`
  line-height: 1.35;
  color: var(--text-color);
  word-break: break-word;
`;
