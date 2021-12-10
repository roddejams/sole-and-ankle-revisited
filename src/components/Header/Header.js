import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Long Sale</NavLink>
          <NavLink href="/new">New&nbsp;Long Releases</NavLink>
          <NavLink href="/men">Long Men</NavLink>
          <NavLink href="/women">Long Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag" />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
          </UnstyledButton>
        </MobileNav>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
      border-radius: 16px;
      background-color: #e5e5e5;
  }

  &::-webkit-scrollbar-thumb {
      border-radius: 16px;
      background-color: #acacac;

      &:hover {
          background-color: #6E7881;
      }
  }

  // For IE
  & {
      scrollbar-face-color: #acacac;
      scrollbar-track-color: #e5e5e5;
  }

  //For firefox
  scrollbar-color: #acacac #e5e5e5;
  scrollbar-width: thin;

  @media ${QUERIES.tabletAndUnder} {
    border-top: 4px solid ${COLORS.gray[900]};
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 5vw - 2rem, 3rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndUnder} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;

  @media ${QUERIES.tabletAndUnder} {
    display: flex;
    gap: 40px;
  }

  @media ${QUERIES.phoneAndUnder} {
    gap: 24px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
