import styled from '@emotion/styled';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const CustomizedLocationOnIcon = styled(LocationOnIcon)`
  margin-right: 5px;
  color: currentColor;
  :hover {
    color: currentColor;
  }
`;
export const CustomizedEmailIcon = styled(EmailIcon)`
  margin-right: 5px;
  color: currentColor;
  :hover {
    color: currentColor;
  }
`;
export const CustomizedLocalPhoneIcon = styled(LocalPhoneIcon)`
  margin-right: 5px;

  color: currentColor;
  :hover {
    color: currentColor;
  }
`;
export const CustomizedGitHubIcon = styled(GitHubIcon)`
  margin-right: 10px;
  color: currentColor;
  :hover {
    color: currentColor;
  }
`;
export const CustomizedLinkedInIcon = styled(LinkedInIcon)`
  color: currentColor;
  :hover {
    color: currentColor;
  }
`;

export const FooterContacts = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;

  padding: 10px;
  transition: all 0.5s ease-out;
  border-radius: 5px;
  background: var(--color-theme-card);
  box-shadow: var(--box-shadow-wrrap-1);
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

export const SocialContacts = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LinkContacts = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  text-decoration: none;
  color: var(--text-color);
  :hover,
  :focus {
    color: var(--text-acc);
  }
`;
