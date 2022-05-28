import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { 
  Container,
  Message, 
  Wrapper} from './style';

interface IInformationalLabel {
  icon?: string;
  message: string
}

export const InformationalLabel = ({ icon, message }:IInformationalLabel) => {
  return (
    <Container>
      <Wrapper>
        { icon && (<Icon name={icon} size={22} />)}
        <Message>{message}</Message>
      </Wrapper>
    </Container>
  );
}