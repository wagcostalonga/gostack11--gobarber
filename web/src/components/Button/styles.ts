import styled from 'styled-components';
import { shade } from 'polished';

export const BtnComponent = styled.button`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  color: #fff;
  font-weight: 500;
  margin-top: 16px;
  transition: all 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
