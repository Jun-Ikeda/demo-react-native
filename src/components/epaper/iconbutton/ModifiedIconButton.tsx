/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import {
  ViewStyle,
  StyleSheet,
  StyleProp,
  GestureResponderEvent,
  TouchableWithoutFeedback,
} from 'react-native';
import { TouchableRipple, withTheme } from 'react-native-paper';
import color from 'color';

import Icon, { IconSource } from 'react-native-paper/src/components/Icon';
import CrossFadeIcon from 'react-native-paper/src/components/CrossFadeIcon';

// import type { $RemoveChildren } from '../types';

import { Theme } from '../../../interface';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    margin: 6,
  },
  disabled: {
    opacity: 0.32,
  },
});

type TouchableRippleProps
= React.ComponentPropsWithoutRef<typeof TouchableRipple>

type Props = Omit<TouchableRippleProps, 'children'> & {
  icon: IconSource;
  color?: string;
  size?: number;
  ripple?: number;
  disabled?: boolean;
  animated?: boolean;
  accessibilityLabel?: string;
  onPress?: (e: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  ref?: React.RefObject<TouchableWithoutFeedback>;
  theme: Theme;
};

const IconButton = ({
  icon,
  color: customColor,
  size = 24,
  ripple = 1.5,
  accessibilityLabel,
  disabled,
  onPress,
  animated = false,
  theme,
  style,
  ...rest
}: Props) => {
  const iconColor = typeof customColor !== 'undefined' ? customColor : theme.colors.text;
  const rippleColor = color(iconColor).alpha(0.32).rgb().string();
  const IconComponent = animated ? CrossFadeIcon : Icon;
  const buttonSize = size * ripple;
  return (
    <TouchableRipple
      borderless
      centered
      onPress={onPress}
      rippleColor={rippleColor}
      style={[
        styles.container,
        { width: buttonSize, height: buttonSize, borderRadius: buttonSize / 2 },
        disabled && styles.disabled,
        style,
      ]}
      accessibilityLabel={accessibilityLabel}
      // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
      accessibilityTraits={disabled ? ['button', 'disabled'] : 'button'}
      accessibilityComponentType="button"
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      hitSlop={
        TouchableRipple.supported
          ? {
            top: 10, left: 10, bottom: 10, right: 10,
          }
          : {
            top: 6, left: 6, bottom: 6, right: 6,
          }
      }
      {...rest}
    >
      <IconComponent color={iconColor} source={icon} size={size} />
    </TouchableRipple>
  );
};

export default withTheme(IconButton);
