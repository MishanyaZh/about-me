import styled from '@emotion/styled';

export const AppBox = styled.div`
  background-color: ${props =>
    props.theme === false
      ? 'var(--color-light-theme)'
      : 'var(--color-dark-theme)'};
  color: ${props => (props.theme === false ? 'black' : 'green')};
`;
