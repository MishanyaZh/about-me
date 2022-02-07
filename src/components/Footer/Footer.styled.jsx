import styled from '@emotion/styled';

export const FooterContacts = styled.footer`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: var(--box-shadow-wrrap-2);
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
