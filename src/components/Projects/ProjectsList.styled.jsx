import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-right: 10px;
  margin-left: 10px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-basis: calc((100% - 80px) / 4);
  margin-bottom: 15px;
  /* margin-right: 10px; */

  height: 200px;
  width: 250px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: var(--box-shadow-wrrap-2);
  background: var(--color-theme-card);

  &:hover {
    background: var(--hover-theme-card);
    transition: all 0.5s ease-out;
  }

  @media (max-width: 766px) {
   flex-basis: calc((100% - 80px) / 3);
`;
