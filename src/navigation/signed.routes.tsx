import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { Text, View } from "react-native";
import TabsRouter from './tabs.routes';
import DrawerRoute from './drawer.routes';

type ParamListBase = {
  Tabs: undefined;
  Drawer: undefined;
};

const Stack = createNativeStackNavigator<ParamListBase>();

export const SignedRoutes = () => {  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs" screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Tabs" component={TabsRouter} /> */}
        <Stack.Screen name="Drawer" component={DrawerRoute} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
