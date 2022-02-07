import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin-bottom: 15px;

  height: 200px;
  width: 250px;
  border-radius: 5px;
  box-shadow: var(--box-shadow-wrrap-2);
`;
