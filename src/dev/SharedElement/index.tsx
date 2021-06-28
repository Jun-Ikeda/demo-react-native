import * as React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';

const Stack = createSharedElementStackNavigator();

const options = {
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress,
    },
  }),
};

export default function SharedElementStackNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={() => options}
      />
    </Stack.Navigator>
  );
}
