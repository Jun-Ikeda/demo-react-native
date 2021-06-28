import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { navigationRef } from './ref';
import TabsHandler from './TabsHandler';

import SharedElement from '../SharedElement';
import EPaper from '../EPaper';
import SVG from '../SVG';
import Neumorphic from '../Neumorphic';

const Tab = createBottomTabNavigator();

const DevNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Tab.Navigator screenOptions={{ tabBarVisible: false }} initialRouteName="EPaper">
      <Tab.Screen name="SharedElement" component={SharedElement} />
      <Tab.Screen name="EPaper" component={EPaper} />
      <Tab.Screen name="SVG" component={SVG} />
      <Tab.Screen name="Neumorphic" component={Neumorphic} />
    </Tab.Navigator>
    <TabsHandler />
  </NavigationContainer>
);

export default DevNavigator;
