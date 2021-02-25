import Image from 'next/image';
import { HeaderContainer } from './Header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      {/* Logo */}
      <Image src={'/moviger-logo.png'} width={'auto'} height={'auto'} />

      {/* Header text */}
      <p>HD movies at the smallest file size</p>

      {/* Quick search */}
      {/* Header links */}
    </HeaderContainer>
  );
};

export default Header;
