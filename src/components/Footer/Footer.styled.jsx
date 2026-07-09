import styled from '@emotion/styled';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Telegram as TelegramIcon,
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
export const CustomizedTelegramIcon = StyledIcon(TelegramIcon);

export const FooterContacts = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  margin: 0 10px 10px;
  padding: 14px 12px;
  transition: background-color 0.35s ease-out, box-shadow 0.35s ease-out,
    border-color 0.35s ease-out;
  border-radius: 18px;
  border: 1px solid var(--surface-border);
  background: var(--color-theme-card);
  backdrop-filter: blur(14px);
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
  text-align: center;
`;

export const RowFlexBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const LinkContacts = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  gap: 5px;
  text-decoration: none;
  color: var(--text-color);
  transition: color 0.2s ease, transform 0.2s ease;
  :hover,
  :focus {
    color: var(--text-acc);
    transform: translateY(-1px);
  }
`;
