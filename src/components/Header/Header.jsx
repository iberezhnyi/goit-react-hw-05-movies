import { HeaderStyled, NavItem, NavLinkStyled, NavList } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <nav>
        <NavList>
          <NavItem>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </NavItem>
        </NavList>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
