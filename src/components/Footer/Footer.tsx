import React from 'react';
import {
  FooterContacts,
  ColumnFlexBox,
  RowFlexBox,
  LinkContacts,
  CustomizedGitHubIcon,
  CustomizedLinkedInIcon,
  CustomizedLocalPhoneIcon,
  CustomizedEmailIcon,
  CustomizedLocationOnIcon,
  CustomizedPictureAsPdfIcon,
  CustomizedDocumentScannerIcon,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterContacts id="footer">
      <ColumnFlexBox>
        <LinkContacts href="tel: +48 573 995 682">
          <CustomizedLocalPhoneIcon fontSize="small" />
          <span>+48 573 995 682</span>
        </LinkContacts>

        <LinkContacts href="mailto:zholondkovskyimykhailo@gmail.com">
          <CustomizedEmailIcon fontSize="small" />
          <span>zholondkovskyimykhailo@gmail.com</span>
        </LinkContacts>
      </ColumnFlexBox>

      <RowFlexBox>
        <LinkContacts
          href="https://github.com/MishanyaZh"
          target="_blank"
          rel="noreferrer"
        >
          <CustomizedGitHubIcon
            sx={{ color: 'var(--text-color)' }}
            fontSize="large"
          />
        </LinkContacts>
        <LinkContacts
          href="http://www.linkedin.com/in/m-zholondkovskyi"
          target="_blank"
          rel="noreferrer"
        >
          <CustomizedLinkedInIcon
            sx={{ color: 'var(--text-color)' }}
            fontSize="large"
          />
        </LinkContacts>
      </RowFlexBox>

      <ColumnFlexBox>
        <LinkContacts
          href="https://goo.gl/maps/bZbz9wkoaYwjsyZGA"
          target="_blank"
          rel="noreferrer"
        >
          <CustomizedLocationOnIcon />
          <span>Gorzow Wielkopolski</span>
        </LinkContacts>

        <RowFlexBox>
          <LinkContacts
            href="https://docs.google.com/document/d/1gKiMRnZFoVd5-d3klOuEjziUP54dra6ortTnDUI_xmw/edit?usp=sharing"
            target="_blank"
          >
            <CustomizedDocumentScannerIcon />
            <span>Open CV</span>
          </LinkContacts>

          <LinkContacts href="/CV_Zholondkovskyi_React.pdf" download>
            <CustomizedPictureAsPdfIcon />
            <span>Download CV</span>
          </LinkContacts>
        </RowFlexBox>
      </ColumnFlexBox>
    </FooterContacts>
  );
};

export default Footer;
