import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'react-native-paper';

import { EButton } from '../../components/epaper';

import { increase, decrease } from './actions';

const Counter = ({ value, increase, decrease }) => (
  <View>
    <EButton onPress={increase}>
      Increment
    </EButton>
    <EButton onPress={decrease}>
      Decrement
    </EButton>
    <View>
      <Text>
        Clicked:
        {value}
        times
      </Text>
    </View>
  </View>
);

export default connect(
  (state) => ({ value: state.counter }),
  { increase, decrease },
)(Counter);
