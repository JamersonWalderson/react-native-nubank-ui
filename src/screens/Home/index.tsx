import React from "react";
import { 
  Container, 
  Header, 
  Main, 
  HeaderOptions,
  Options,
  WelcomeMessage,
  Message,
  SectionAccount,
  Account,
  Balance, 
  Title,
  Opened,
  ActionButton,
  AccountOptionsMenu
 } from "./style";
import Avatar from '../../components/Avatar';
import HeaderOptionsButton from "../../components/HeaderOptionsButton";
import { Text } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import ButtonRound from "../../components/ButtonRound";

interface IUser {
  name: string;
  sale: string;
}

const Home = () => {
  const user: IUser = {
    name: 'Jamerson',
    sale: '16.000'
  }

  const AccountButtonOptions = [
    { id: 1, label: 'Pagar', icon: 'Área Pix' },
    { id: 2, label: 'Pagar', icon: 'barcode' },
    { id: 3, label: 'Pegar\n Emprestado', icon: 'ambulance' },
    { id: 4, label: 'Transferir', icon: 'deposite' },
    { id: 5, label: 'Depositar', icon: 'deposite' },
    { id: 6, label: 'Recarga de\n celular', icon: 'deposite' },
    { id: 7, label: 'Cobrar', icon: 'deposite' },
    { id: 8, label: 'Doação', icon: 'deposite' },
    { id: 9, label: 'Transferir\n Internac.', icon: 'deposite' }
  ];

  return(
    <Container>
      <Header>
        <HeaderOptions>
          <Avatar/>
          <Options>
            <HeaderOptionsButton icon='eyeo'/>
            <HeaderOptionsButton icon='questioncircleo'/>
            <HeaderOptionsButton icon='mail'/>
          </Options>
        </HeaderOptions>
        <WelcomeMessage>
          <Message>Olá, {user.name} </Message>
        </WelcomeMessage>
      </Header>
      
      <Main>
        <SectionAccount activeOpacity={0.4}>
            <Balance>
              <Title>Conta</Title>
              <Opened>R$ {user.sale}</Opened>
            </Balance>
            <ActionButton>
              <Icon name='right' size={22} />
            </ActionButton>
        </SectionAccount>

        <AccountOptionsMenu 
          horizontal={true}
          contentContainerStyle={{paddingVertical: '5%'}}
        >
          {AccountButtonOptions.map((item) => <ButtonRound icon={item.icon} key={item.id} label={item.label} />)}
        </AccountOptionsMenu>

      </Main>
    </Container>
  );
}

export default Home;