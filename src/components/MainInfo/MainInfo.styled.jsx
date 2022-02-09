import styled from '@emotion/styled';

export const MainInfoBox = styled.div`
  margin: 10px;
  padding: 10px 15px 15px 15px;
  border-radius: 5px;
  background: var(--color-theme-card);
  box-shadow: var(--box-shadow-wrrap-1);
`;

export const Summary = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 450px;
  border-radius: 5px;
  box-shadow: var(--box-shadow-wrrap-1);
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
  box-shadow: var(--box-shadow-wrrap-1);
`;
