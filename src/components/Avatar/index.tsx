
import AvatarIcon from 'react-native-vector-icons/AntDesign';
import React from 'react';
import { Container } from './style';
import { TouchableOpacityComponent } from 'react-native';

interface IAvatar  {
 onPress?: any;
}

const Avatar = ({ onPress, ...props}: IAvatar) => {
  return(
    <Container onPress={onPress} activeOpacity={0.5}>
      <AvatarIcon name='user' size={22} color={'#fff'} />
    </Container>
  );
}

export default Avatar;