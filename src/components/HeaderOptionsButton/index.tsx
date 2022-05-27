import React from "react";
import { Text, TouchableOpacityProps } from "react-native";
import ButtonIcon from 'react-native-vector-icons/AntDesign';
import { 
    Container
} from './style';

interface IHeaderOptionsButton extends TouchableOpacityProps {
    icon: string;
}

const HeaderOptionsButton = ({ icon }: IHeaderOptionsButton) => {
  return(
    <Container activeOpacity={0.1}>
      <ButtonIcon name={icon} size={22} color={'#fff'} style={{margin: 5}}/>
    </Container>
  );
}

export default HeaderOptionsButton;