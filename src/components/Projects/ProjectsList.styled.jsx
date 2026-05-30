import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 12px 10px;
  margin: 15px 8px 0 8px;
`;

export const Item = styled.li`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  flex-basis: calc((100% - 30px) / 1);
  box-sizing: border-box;
  gap: 8px;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 15px;
  min-height: 220px;
  min-width: 236px;
  max-width: 250px;
  padding: 12px 10px;
  border-radius: 5px;
  box-shadow: var(--box-shadow-2);
  background: var(--color-theme-card);
  transition: background-color 0.35s ease-out, box-shadow 0.35s ease-out,
    transform 0.35s ease-out;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    width: 0%;
    padding-top: 0%;
    transform: translate(-50%, -50%);
    background: var(--hover-theme-card);
    transition: 0.5s ease padding-top, 0.5s ease width;
  }
  &:hover {
    &:before {
      width: 150%;
      padding-top: 150%;
    }
    & [data-project-action='true'] {
      border: 1px solid var(--text-acc);
      background: var(--color-theme-card);
      color: var(--text-acc);
      transition: border-color 0.35s ease-out, background-color 0.35s ease-out,
        color 0.35s ease-out;
    }
  }
  @media (min-width: 550px) {
    flex-basis: calc((100% - 40px) / 2);
  }
  @media (max-width: 549px) {
    width: 100%;
    max-width: 320px;
    margin-right: 0;
    margin-left: 0;
  }
  @media (min-width: 768px) {
    flex-basis: calc((100% - 80px) / 3);
  }
  @media (min-width: 1024px) {
    flex-basis: calc((100% - 80px) / 4);
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: var(--text-acc);
`;

export const ActionLink = styled.a`
  position: relative;
  display: inline-block;
  text-align: center;
  font-size: 0.95rem;
  margin-top: 5px;
  padding: 8px 12px;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: border-color 0.35s ease-out, background-color 0.35s ease-out,
    color 0.35s ease-out;
  color: var(--text-color);
  background: var(--hover-theme-card);
  border: 1px solid var(--text-color);
`;

export const Span = styled.span`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 2px 4px 0;
  width: 100%;
  flex: 1;
  line-height: 1.4;
  font-size: 0.92rem;
  color: var(--text-color);
`;

export const Technologies = styled.span`
  position: relative;
  font-size: 0.85rem;
  line-height: 1.25;
  color: var(--text-acc);
`;

export const TitleCard = styled.h3`
  position: relative;
  margin: 0;
  font-size: 1.03rem;
  line-height: 1.3;
`;
