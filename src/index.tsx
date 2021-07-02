import * as React from 'react';
import { NativeModules, Platform, LogBox } from 'react-native';

import Providers from './providers';

import Nav from './nav/Nav';
import * as Dev from './dev';

LogBox.ignoreAllLogs();

if (Platform.OS === 'android') {
  const { UIManager } = NativeModules;
  UIManager.setLayoutAnimationEnabledExperimental(true);
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface AppProps {}

const App = (props: AppProps) => (
  <Providers>
    <Dev.DevNavigator />
  </Providers>
);

export default App;
