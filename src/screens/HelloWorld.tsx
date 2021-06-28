import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface HelloWorldProps {}

const HelloWorld = (props: HelloWorldProps) => (
  <View style={styles.container}>
    <Text>HelloWorld</Text>
  </View>
);

export default HelloWorld;

const styles = StyleSheet.create({
  container: {},
});
