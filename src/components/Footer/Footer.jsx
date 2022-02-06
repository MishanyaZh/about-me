import React from 'react';
import { FooterContacts, Contacts } from './Footer.styled';

const Footer = () => {
  return (
    <FooterContacts id="footer">
      <Contacts>
        <a href="tel: +48 573 995 682">+48 573 995 682</a>
        <a href="mailto:zholondkovskyimykhailo@gmail.com">
          zholondkovskyimykhailo@gmail.com
        </a>
      </Contacts>

      <div>
        <a
          href="https://github.com/MishanyaZh"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
        <br />
        <a
          href="www.linkedin.com/in/m-zholondkovskyi"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
      </div>
      <div>
        <a
          href="https://goo.gl/maps/bZbz9wkoaYwjsyZGA"
          target="_blank"
          rel="noreferrer"
        >
          Gorzow Wielkopolski
        </a>
      </div>
    </FooterContacts>
  );
};

export default Footer;
