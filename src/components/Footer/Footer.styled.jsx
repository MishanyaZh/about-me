import styled from '@emotion/styled';

export const FooterContacts = styled.footer`
  display: flex;
  justify-content: space-around;
  @media (max-width: 766px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
