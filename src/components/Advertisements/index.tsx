import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { 
  Container,
  Message, 
  Wrapper} from './style';

interface IAdvertisements {
  icon?: string;
  message: string
}

export const Advertisements = ({ icon, message }:IAdvertisements) => {
  return (
    <Container>
      <Wrapper>
        { icon && (<Icon name={icon} size={22} />)}
        <Message>{message}</Message>
      </Wrapper>
    </Container>
  );
}