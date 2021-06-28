import * as React from 'react';
import { NativeModules, Platform } from 'react-native';

import Providers from './providers';

import Nav from './nav/Nav';
import { DevNavigator } from './dev';

if (Platform.OS === 'android') {
  const { UIManager } = NativeModules;
  UIManager.setLayoutAnimationEnabledExperimental(true);
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface AppProps {}

const App = (props: AppProps) => (
  <Providers>
    <DevNavigator />
  </Providers>
);

export default App;
