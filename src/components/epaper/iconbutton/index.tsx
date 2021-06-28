/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import * as React from 'react';
import { withTheme } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

import { StyleSheet } from 'react-native';
import { Theme } from '../../../interface';
import { Color } from '../../../config';

import IconButtonOriginal from './ModifiedIconButton';

interface IconButtonProps extends
  React.ComponentPropsWithoutRef<typeof IconButtonOriginal> {
  colors?: string[]
  start?: [number, number]
  end?: [number, number]
  theme: Theme
}

const styles = StyleSheet.create({
  iconButton: {
    margin: 0,
    padding: 6,
  },
  gradient: {
    alignSelf: 'flex-start',
    // padding: 6,
    // margin: 6,
  },
});

const IconButton = ({
  colors = [],
  start = [0.25, 0.25],
  end = [0.75, 0.75],
  size = 24,
  ripple = 2,
  ...props
}: IconButtonProps) => {
  const {
    style,
    theme: { colors: { primary } },
    color,
    ...buttonProps
  } = props;
  const buttonSize = size * ripple;
  if (colors.length !== 0) {
    const gradient = (colors.length === 1) ? [primary, ...colors] : colors;
    return (
      <LinearGradient
        style={[
          styles.gradient,
          style,
          {
            // height: buttonSize,
            // width: buttonSize,
            borderRadius: buttonSize / 2,
          },
        ]}
        colors={gradient}
        start={start}
        end={end}
      >
        <IconButtonOriginal
          color={color || Color.white[1]}
          size={size}
          ripple={ripple}
          style={styles.iconButton}
          {...buttonProps}
        />
      </LinearGradient>
    );
  }
  return (
    <IconButtonOriginal
      style={style}
      size={size}
      ripple={ripple}
      color={color}
      {...buttonProps}
    />
  );
};

export default withTheme(IconButton);
