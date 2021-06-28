import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import HelloWorld from '../screens/HelloWorld';

const Stack = createSharedElementStackNavigator();
export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" mode="modal">
        <Stack.Screen name="HelloWorld" component={HelloWorld} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
