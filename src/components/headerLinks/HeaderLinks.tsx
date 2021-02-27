import Link from 'next/link';
import {
  HeaderLink,
  HeaderLinksContainer,
  HeaderLinksUl,
} from './HeaderLinks.styles';

const HeaderLinks = () => {
  return (
    // Nav
    <HeaderLinksContainer>
      {/* Ul */}
      <HeaderLinksUl>
        {/* Li */}
        <li>
          <Link href="/" passHref>
            <HeaderLink>Home</HeaderLink>
          </Link>
        </li>

        <li>
          <Link href="/" passHref>
            <HeaderLink>4K</HeaderLink>
          </Link>
        </li>

        <li>
          <Link href="/trending" passHref>
            <HeaderLink>Trending</HeaderLink>
          </Link>
        </li>

        <li>
          <Link href="/movies" passHref>
            <HeaderLink>Browse Movies</HeaderLink>
          </Link>
        </li>

        <li>
          <Link href="/" passHref>
            <HeaderLink authLink>Login</HeaderLink>
          </Link>
        </li>

        <li>
          <Link href="/" passHref>
            <HeaderLink authLink>Register</HeaderLink>
          </Link>
        </li>
      </HeaderLinksUl>
    </HeaderLinksContainer>
  );
};

export default HeaderLinks;
