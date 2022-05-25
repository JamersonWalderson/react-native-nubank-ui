import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';

type ParamListBase = {
  Home: undefined;
  Description: undefined;
};

const Tab = createMaterialBottomTabNavigator<ParamListBase>();

export default function TabsRouter() {
    
  return (
    <Tab.Navigator initialRouteName='Home' keyboardHidesNavigationBar>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <FontAwesomeIcon size={25} name='home' />
          ),
        }}
      />
      <Tab.Screen
        name='Description'
        component={Home}
        options={{
          tabBarLabel: 'Description',
          tabBarIcon: () => (
            <FontAwesomeIcon size={25} name="home" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
