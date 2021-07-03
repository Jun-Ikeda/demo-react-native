import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { Provider } from 'react-redux';
import Detail1 from './Detail1';
import Detail2 from './Detail2';

import { store } from './store';

interface ReduxProps {}

const Redux = (props: ReduxProps) => (
  <Provider store={store}>
    <View style={styles.container}>
      <Text>Redux</Text>
      <Detail1 />
      <Detail2 />
    </View>
  </Provider>
);

export default Redux;

const styles = StyleSheet.create({
  container: {},
});
