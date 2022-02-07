import styled from '@emotion/styled';

export const Summary = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 550px;
  border-radius: 5px;
  box-shadow: var(--box-shadow-wrrap-2);
  @media (max-width: 766px) {
    min-width: 250px;
    max-width: 450px;
  }
`;

export const Img = styled.img`
  width: 250px;
  height: auto;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: var(--box-shadow-wrrap-2);
`;
