import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

const Loading = () => {
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Carregando...</Text>
      <ActivityIndicator size="large" color="#666" />
    </View>
  )
}

export default Loading;