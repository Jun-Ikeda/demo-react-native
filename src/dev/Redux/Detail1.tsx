import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { deleteName, setName } from './actions';
import { store } from './store';

import { EButton } from '../../components/epaper';

interface Detail1Props {
  setName: Function;
  deleteName: Function
}

const Detail1 = (props: Detail1Props) => {
  const { setName, deleteName } = props;
  return (
    <View style={styles.container}>
      <EButton onPress={() => setName('aiueo')}>setName</EButton>
      <EButton onPress={() => deleteName()}>deleteName</EButton>
      <Text>Detail1</Text>
    </View>
  );
};

export default connect(
  (state) => ({ name: state.user.name }),
  { setName, deleteName },
)(Detail1);

const styles = StyleSheet.create({
  container: {},
});
