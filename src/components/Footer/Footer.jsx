import React from 'react';
import {
  FooterContacts,
  Contacts,
  SocialContacts,
  Linkontacts,
  CustomizedGitHubIcon,
  CustomizedLinkedInIcon,
  CustomizedLocalPhoneIcon,
  CustomizedEmailIcon,
  CustomizedLocationOnIcon,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterContacts id="footer">
      <Contacts>
        <Linkontacts href="tel: +48 573 995 682">
          <CustomizedLocalPhoneIcon fontSize="small" />
          <span>+48 573 995 682</span>
        </Linkontacts>
        <Linkontacts href="mailto:zholondkovskyimykhailo@gmail.com">
          <CustomizedEmailIcon fontSize="small" />
          <span>zholondkovskyimykhailo@gmail.com</span>
        </Linkontacts>
      </Contacts>

      <SocialContacts>
        <Linkontacts
          href="https://github.com/MishanyaZh"
          target="_blank"
          rel="noreferrer"
        >
          <CustomizedGitHubIcon
            sx={{ color: 'var(--text-color)' }}
            fontSize="large"
          />
        </Linkontacts>
        <Linkontacts
          href="http://www.linkedin.com/in/m-zholondkovskyi"
          target="_blank"
          rel="noreferrer"
        >
          <CustomizedLinkedInIcon
            sx={{ color: 'var(--text-color)' }}
            fontSize="large"
          />
        </Linkontacts>
      </SocialContacts>
      <div>
        <Linkontacts
          href="https://goo.gl/maps/bZbz9wkoaYwjsyZGA"
          target="_blank"
          rel="noreferrer"
        >
          <CustomizedLocationOnIcon />
          <span>Gorzow Wielkopolski</span>
        </Linkontacts>
      </div>
    </FooterContacts>
  );
};

export default Footer;
