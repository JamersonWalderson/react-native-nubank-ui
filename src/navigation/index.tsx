import React from "react";
import {  useAuth } from "../hooks/useAuth";
import Loading from '../screens/Loading';
import Home from '../screens/Home';
import { SafeAreaView } from "react-native";

export const Router = () => {
  const { loading } = useAuth();

  if(loading) {
    return <Loading />
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Home />
    </SafeAreaView>
  );
}