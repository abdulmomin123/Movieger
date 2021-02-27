import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 8rem;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  color: var(--color-text);
  background: var(--color-bg);
  border-bottom: 1px solid #2f2f2f;
  backface-visibility: hidden;
  overflow: hidden;
  z-index: 1;
`;

export const HeaderText = styled.p`
  font-size: 1.9rem;
  margin: 0 auto 0 10rem;
`;
