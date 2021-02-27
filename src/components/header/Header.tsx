import HeaderLinks from '../headerLinks/HeaderLinks';
import Logo from '../logo/Logo';
import QuickSearch from '../quickSearch/QuickSearch';
import { HeaderContainer, HeaderText } from './Header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      {/* Logo */}
      <Logo />

      {/* Header text */}
      <HeaderText>HD movies at the smallest file size</HeaderText>

      {/* Quick search */}
      <QuickSearch />

      {/* Header links */}
      <HeaderLinks />
    </HeaderContainer>
  );
};

export default Header;
