import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-space-between;
  align-items: center;
  height: 60px;
  padding: 8px;
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
