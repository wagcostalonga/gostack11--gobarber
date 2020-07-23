import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-backgound.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`;

const comeFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${comeFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    > a {
      color: #fff;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: all 0.2s;

      &:hover {
        color: ${shade(0.2, '#fff')};
      }
    }
  }

  > a {
    color: #ff9000;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: all 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;

  @media screen and (max-width: 992px) {
    flex: 0;
  }
`;
