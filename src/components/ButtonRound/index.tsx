
import AvatarIcon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import { 
  Container,
  Label } from './style';
import { View } from 'react-native';

interface IButtonRound  {
 onPress?: any;
 icon: string;
 label: string;
}

const ButtonRound = ({ onPress, icon, label, ...props}: IButtonRound) => {
  return(
    <View>
      <Container onPress={onPress} activeOpacity={0.5}>
      <AvatarIcon name={icon} size={18} color={'#000'} />
    </Container>
    <Label>{label}</Label>
    </View>
  );
}

export default ButtonRound;