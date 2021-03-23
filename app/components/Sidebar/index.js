import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './helenaaaa.jpg';
import messages from './messages';
import Wrapper from './Wrapper';

function Header() {
  return (
    <Wrapper>
      <A href="/">
        <Img src={Banner} alt="helenapocket - Logo" />
      </A>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/illustration">
          <FormattedMessage {...messages.illustration} />
        </HeaderLink>
        <HeaderLink to="/environments">
          <FormattedMessage {...messages.environments} />
        </HeaderLink>
        <HeaderLink to="/visualdevelopment">
          <FormattedMessage {...messages.visualdevelopment} />
        </HeaderLink>
        <HeaderLink to="/lettering">
          <FormattedMessage {...messages.lettering} />
        </HeaderLink>
        <HeaderLink to="/comics">
          <FormattedMessage {...messages.comics} />
        </HeaderLink>
        <HeaderLink to="/about">
          <FormattedMessage {...messages.about} />
        </HeaderLink>
      </NavBar>
    </Wrapper>
  );
}

export default Header;
