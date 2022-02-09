import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-right: 5px;
  margin-left: 5px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-basis: calc((100% - 30px) / 1);

  margin-bottom: 15px;

  height: 200px;
  max-width: 250px;
  border-radius: 5px;

  cursor: pointer;
  box-shadow: var(--box-shadow-wrrap-2);
  background: var(--color-theme-card);

  &:hover {
    background: var(--hover-theme-card);
    transition: all 0.5s ease-out;
  }

  @media (min-width: 550px) {
    flex-basis: calc((100% - 40px) / 2);
  }

  @media (min-width: 768px) {
    flex-basis: calc((100% - 80px) / 3);
  }
  @media (min-width: 1024px) {
    flex-basis: calc((100% - 80px) / 4);
  }
`;
