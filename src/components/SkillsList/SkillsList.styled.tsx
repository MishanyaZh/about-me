import styled from '@emotion/styled';

export const SkillList = styled.ul`
  margin: 0;
`;

export const SubList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style: disc;
  padding-left: 20px;
`;

export const Title = styled.h3`
  margin-bottom: 10px;
  color: var(--text-acc);
`;

export const DownPageItems = styled.li`
  margin-bottom: 20px;
  gap: 5px;
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div<{ hasRole?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ hasRole }) =>
    hasRole ? 'space-between' : 'flex-start'};
`;

export const Subtitle = styled.h4``;

export const Role = styled.span`
  color: var(--text-color-2);
`;

export const Date = styled.span`
  color: var(--text-color-2);
`;

export const SKill = styled.li`
  line-height: 1.35;
  color: var(--text-color);
`;
