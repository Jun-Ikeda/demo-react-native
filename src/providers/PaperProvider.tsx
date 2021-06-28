import * as React from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import { Provider } from 'react-native-paper';

import { themes } from '../config';

interface PaperProviderProps {
  children: React.ReactNode
}

const PaperProvider = (props: PaperProviderProps) => {
  const { children } = props;
  const colorScheme = useColorScheme();
  const isDark = true; // colorScheme === 'dark'
  const theme = isDark ? themes.dark : themes.light;
  return (
    <Provider theme={theme}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      {children}
    </Provider>
  );
};

export default PaperProvider;
