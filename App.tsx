import React from 'react';
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App to start working on your app!</Text>
      <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
    </View>
  );
}
