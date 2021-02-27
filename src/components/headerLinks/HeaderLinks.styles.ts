import styled from 'styled-components';

interface LinkProps {
  authLink?: boolean;
}

export const HeaderLinksContainer = styled.nav`
  margin-left: 1rem;
`;

export const HeaderLinksUl = styled.ul`
  display: flex;
  font-size: 1.5rem;

  li {
    padding: 0 1.1rem;
  }
`;

export const HeaderLink = styled.a<LinkProps>`
  font-weight: bold;
  color: ${({ authLink }) => (authLink ? '#fff' : '#919191')};
  padding: 3rem 0;
  transition: color 0.2s;

  &:hover {
    color: ${({ authLink }) => (authLink ? '#919191' : '#fff')};
  }
`;
