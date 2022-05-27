import React from "react";
import { theme } from '../../global/styles';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
  }
});

export default styles;