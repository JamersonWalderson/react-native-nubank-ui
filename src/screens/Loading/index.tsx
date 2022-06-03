import React from "react";
import { 
  Image, 
  SafeAreaView, } from "react-native";
import Logo from '../../assets/Nubank_Logo3x.png';
import styles  from "./styles";

const Loading = () => {
  return(
    <SafeAreaView style={styles.container}>
      <Image source={Logo} resizeMode={'center'} />
    </SafeAreaView>
  )
}

export default Loading;