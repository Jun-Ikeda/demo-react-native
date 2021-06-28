/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import * as React from 'react';
import { Button as ButtonOriginal, withTheme } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

import { Theme } from '../../../interface';
import { Color } from '../../../config';

interface ButtonProps extends
  React.ComponentPropsWithoutRef<typeof ButtonOriginal> {
  colors?: string[]
  start?: [number, number]
  end?: [number, number]
  theme: Theme
}

const Button = ({
  colors = [], start = [0, 0], end = [1, 1], ...props
}: ButtonProps) => {
  const {
    children,
    mode,
    style,
    theme: { colors: { primary }, roundness },
    color,
    ...buttonProps
  } = props;
  if (mode === 'contained' && colors.length !== 0) {
    const gradient = (colors.length === 1) ? [primary, ...colors] : colors;
    return (
      <LinearGradient
        style={[style, { borderRadius: roundness }]}
        colors={gradient}
        start={start}
        end={end}
      >
        <ButtonOriginal mode="text" color={color || Color.white[1]} {...buttonProps}>
          {children}
        </ButtonOriginal>
      </LinearGradient>
    );
  }
  return (
    <ButtonOriginal mode={mode} style={style} color={color} {...buttonProps}>
      {children}
    </ButtonOriginal>
  );
};

export default withTheme(Button);
