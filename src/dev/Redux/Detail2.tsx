import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'react-native-paper';
// import { deleteName, setName } from './actions';
// import { store } from './store';

interface Detail2Props {
  name: string
}

const Detail2 = (props: Detail2Props) => {
  const { name } = props;
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};

export default connect(
  (state) => ({ name: state.user.name }),
  {},
)(Detail2);

const styles = StyleSheet.create({
  container: {},
});
