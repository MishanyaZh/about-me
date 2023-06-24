import React from 'react';
import {
  FooterContacts,
  Contacts,
  SocialContacts,
  LinkContacts,
  CustomizedGitHubIcon,
  CustomizedLinkedInIcon,
  CustomizedLocalPhoneIcon,
  CustomizedEmailIcon,
  CustomizedLocationOnIcon,
  CustomizedPictureAsPdfIcon,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterContacts id="footer">
      <Contacts>
        <LinkContacts href="tel: +48 573 995 682">
          <CustomizedLocalPhoneIcon fontSize="small" />
          <span>+48 573 995 682</span>
        </LinkContacts>

        <LinkContacts href="mailto:zholondkovskyimykhailo@gmail.com">
          <CustomizedEmailIcon fontSize="small" />
          <span>zholondkovskyimykhailo@gmail.com</span>
        </LinkContacts>
      </Contacts>

      <SocialContacts>
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
      </SocialContacts>

      <Contacts>
        <LinkContacts
          href="https://goo.gl/maps/bZbz9wkoaYwjsyZGA"
          target="_blank"
          rel="noreferrer"
        >
          <CustomizedLocationOnIcon />
          <span>Gorzow Wielkopolski</span>
        </LinkContacts>

        {/* <LinkContacts
          href="https://www.canva.com/design/DAErTJkUFOQ/vj0DUw5s2xXVDs6rR9uOJA/watch?utm_content=DAErTJkUFOQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
          target="_blank"
        >
          <CustomizedPictureAsPdfIcon />
          <span>Open CV</span>
        </LinkContacts> */}
      </Contacts>
    </FooterContacts>
  );
};

export default Footer;
