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
  Balance, 
  Title,
  Opened,
  ActionButton,
  AccountOptionsMenu,
  MyCards,
  ScrollInformations,
  SectionCreditCard,
  Info,
  SubTitle,
  CurrentInvoice,
  AvailableLimit,
  WeBorrowValue,
  SectionWeBorrow,
  SectionInvestiments,
 } from "./style";
import Avatar from '../../components/Avatar';
import HeaderOptionsButton from "../../components/HeaderOptionsButton";
import Icon from 'react-native-vector-icons/AntDesign';
import ButtonRound from "../../components/ButtonRound";
import { InformationalLabel } from "../../components/InformationalLabel";
import Divider from '../../components/Divider';
import { Advertisements } from "../../components/Advertisements";
import { ButtonSmall } from "../../components/ButtonSmall";

interface IUser {
  name: string;
  sale: string;
  currentInvoice: string;
  availableLimit: string;
  weBorrowValue: string;
}

const Home = () => {
  const user: IUser = {
    name: 'Jamerson',
    sale: '16.000',
    currentInvoice: '156.00',
    availableLimit: '56.000',
    weBorrowValue: '1.000.000'
  }

  const AccountButtonOptions = [
    { id: 1, label: 'Pagar', icon: 'ambulance' },
    { id: 2, label: 'Pagar', icon: 'barcode' },
    { id: 3, label: 'Pegar\n Emprestado', icon: 'ambulance' },
    { id: 4, label: 'Transferir', icon: 'ambulance' },
    { id: 5, label: 'Depositar', icon: 'ambulance' },
    { id: 6, label: 'Recarga de\n celular', icon: 'ambulance' },
    { id: 7, label: 'Cobrar', icon: 'ambulance' },
    { id: 8, label: 'Doação', icon: 'ambulance' },
    { id: 9, label: 'Transferir\n Internac.', icon: 'ambulance' }
  ];

  const Informations = [
    {id: 1, label: 'Seu informe de rendimentos\n 2021 já está pronto'},
    {id: 2, label: 'Participe da promoção Tudo no\n Roxinho e concorra a prêmios'},
    {id: 3, label: 'Chegou o débito automático da\n fatura do cartão'},
    {id: 4, label: 'Conheça Nubank Vida: u,\n seguro simples e que cabe no...'},
    {id: 5, label: 'Salve seus amigos da\n burocracia. Faça um convite...'},

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
              <ActionButton>
                <Icon name='right' size={22} />
              </ActionButton>
            </Balance>
            <Opened>R$ {user.sale}</Opened>
        </SectionAccount>

        <AccountOptionsMenu 
          horizontal={true}
          contentContainerStyle={{paddingVertical: '5%'}}
        >
          {AccountButtonOptions.map((item) => (
            <ButtonRound
              icon={item.icon}
              key={item.id}
              label={item.label}
            />))}
        </AccountOptionsMenu>

        <MyCards>
          <InformationalLabel
            icon={'credit-card'}
            message={'Meus cartões'}
          />
        </MyCards>

        <ScrollInformations horizontal={true}>
          {Informations.map((item) => (
            <Advertisements 
              message={item.label}
              key={item.id}
            />))}
        </ScrollInformations>

        <Divider />

        <SectionCreditCard>
          <Info>
            <Title>Cartão de crédito</Title>
            <ActionButton>
              <Icon name='right' size={22} />
            </ActionButton>
          </Info>
          <SubTitle>Fatura atual</SubTitle>
          <CurrentInvoice>R$ { user.currentInvoice }</CurrentInvoice>
          <AvailableLimit>Limite disponível: R$ {user.availableLimit }</AvailableLimit>
          <ButtonSmall label={'Parcelar compras'}/>
        </SectionCreditCard>

        <Divider />

        <SectionWeBorrow>
          <Info>
            <Title>Emprestimo</Title>
            <ActionButton>
              <Icon name='right'size={22} />
            </ActionButton>
          </Info>
          <SubTitle>Valor disponível de até</SubTitle>
          <WeBorrowValue>R$ { user.weBorrowValue }</WeBorrowValue>
        </SectionWeBorrow>

        <Divider />

        <SectionInvestiments>
          <Info>
            <Title>Iasas</Title>
            <ActionButton>
              <Icon name='right' size={22} />
            </ActionButton>
          </Info>
          <SubTitle>O jeito Nu de investir: sem asteriscos, linguagem fácil e a partir de R$1. Saiba mais.</SubTitle>
          <ButtonSmall label={'Consultar saldo para transferência'}/>
        </SectionInvestiments>

      </Main>
    </Container>
  );
}

export default Home;