import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { EButton } from '../../components/epaper';

import { firestore } from './config';

interface FirebaseProps {}

const Firebase = (props: FirebaseProps) => (
  <View style={styles.container}>
    <Text>Firebase</Text>
    <EButton onPress={() => {
      firestore.collection('test').doc('id').set({ message: 'Hello World' });
    }}
    >
      Write
    </EButton>
    <EButton
      onPress={() => {
        firestore.collection('test').doc('id').get().then((doc) => {
          if (doc.exists) {
            console.log(doc.data());
          }
        });
      }}
    >
      Get
    </EButton>
  </View>
);

export default Firebase;

const styles = StyleSheet.create({
  container: {},
});
