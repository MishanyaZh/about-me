import styled from '@emotion/styled';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  LocalPhone as LocalPhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationOnIcon,
  PictureAsPdf as PictureAsPdfIcon,
  DocumentScanner as DocumentScannerIcon,
} from '@mui/icons-material';
import { css } from '@emotion/react';

const BaseIconStyles = css`
  color: currentColor;
  transition: color 0.2s ease;
  :hover {
    color: currentColor;
  }
`;

const StyledIcon = Icon => styled(Icon)`
  ${BaseIconStyles}
`;

export const CustomizedDocumentScannerIcon = StyledIcon(DocumentScannerIcon);
export const CustomizedPictureAsPdfIcon = StyledIcon(PictureAsPdfIcon);
export const CustomizedLocationOnIcon = StyledIcon(LocationOnIcon);
export const CustomizedEmailIcon = StyledIcon(EmailIcon);
export const CustomizedLocalPhoneIcon = StyledIcon(LocalPhoneIcon);
export const CustomizedGitHubIcon = StyledIcon(GitHubIcon);
export const CustomizedLinkedInIcon = StyledIcon(LinkedInIcon);

export const FooterContacts = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  padding: 10px;
  transition: all 0.5s ease-out;
  border-radius: 5px;
  background: var(--color-theme-card);
  box-shadow: var(--box-shadow-1);
  @media (max-width: 766px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ColumnFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const RowFlexBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const LinkContacts = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  gap: 5px;
  text-decoration: none;
  color: var(--text-color);
  transition: color 0.2s ease;
  :hover,
  :focus {
    color: var(--text-acc);
  }
`;
