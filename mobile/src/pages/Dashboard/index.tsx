import React from 'react';

import { Container, Header, HeaderTitle, UserName } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem-vindo,
          {'\n'}
          <UserName>Wagner Costalonga</UserName>
        </HeaderTitle>
      </Header>
    </Container>
  );
};

export default Dashboard;
