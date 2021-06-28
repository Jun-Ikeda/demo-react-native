/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import {
  View, ViewProps, StyleSheet,
} from 'react-native';
import { withTheme } from 'react-native-paper';

import { Theme } from '../../../interface/paper';

const styles = StyleSheet.create({
  container: {},
});

interface ContainerProps extends ViewProps {
  theme: Theme
}

const Container = (props: ContainerProps) => {
  const { theme, ...viewProps } = props;
  const { colors } = theme;
  const CombinedStyle = [
    { backgroundColor: colors.background },
    viewProps.style,
  ];
  return (
    <View
      {...viewProps}
      style={CombinedStyle}
    />
  );
};

export default withTheme(Container);
