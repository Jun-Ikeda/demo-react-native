/* eslint-disable react/require-default-props */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import color from 'color';
import * as React from 'react';
import {
  Animated,
  View,
  ViewStyle,
  StyleSheet,
  StyleProp,
  AccessibilityState,
} from 'react-native';
import {
  ActivityIndicator, Surface, Text, TouchableRipple, withTheme,
} from 'react-native-paper';
import CrossFadeIcon from 'react-native-paper/src/components/CrossFadeIcon';
import Icon, { IconSource } from 'react-native-paper/src/components/Icon';
import { black, white } from 'react-native-paper/src/styles/colors';
import getContrastingColor from 'react-native-paper/src/utils/getContrastingColor';
import type { $RemoveChildren } from 'react-native-paper/src/types';
import { LinearGradient } from 'expo-linear-gradient';
import { Theme } from '../../../interface';

// getContrastingColor;

type Props = $RemoveChildren<typeof Surface> & {
  icon: IconSource;
  label?: string;
  uppercase?: boolean;
  accessibilityLabel?: string;
  accessibilityState?: AccessibilityState;
  animated?: boolean;
  small?: boolean;
  color?: string;
  colors?: string[]
  start?: [number, number];
  end?: [number, number]
  disabled?: boolean;
  visible?: boolean;
  loading?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
  testID?: string;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    elevation: 6,
  },
  touchable: {
    borderRadius: 28,
  },
  standard: {
    height: 56,
    width: 56,
  },
  small: {
    height: 40,
    width: 40,
  },
  extended: {
    height: 48,
    paddingHorizontal: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginHorizontal: 8,
  },
  uppercaseLabel: {
    textTransform: 'uppercase',
  },
  disabled: {
    elevation: 0,
  },
});

const FAB = ({
  small,
  icon,
  label,
  accessibilityLabel = label,
  accessibilityState,
  animated = true,
  color: customColor,
  colors = [],
  start = [0.25, 0.25],
  end = [0.75, 0.75],
  disabled,
  onPress,
  onLongPress,
  theme,
  style,
  visible = true,
  uppercase = true,
  loading,
  testID,
  ...rest
}: Props) => {
  const { current: visibility } = React.useRef<Animated.Value>(
    new Animated.Value(visible ? 1 : 0),
  );
  const { scale } = theme.animation;

  React.useEffect(() => {
    if (visible) {
      Animated.timing(visibility, {
        toValue: 1,
        duration: 200 * scale,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(visibility, {
        toValue: 0,
        duration: 150 * scale,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, scale, visibility]);

  const IconComponent = animated ? CrossFadeIcon : Icon;

  const disabledColor = color(theme.dark ? white : black)
    .alpha(0.12)
    .rgb()
    .string();

  const {
    backgroundColor = disabled ? disabledColor : theme.colors.accent,
  } = (StyleSheet.flatten(style) || {}) as ViewStyle;

  let foregroundColor: string = '';

  if (typeof customColor !== 'undefined') {
    foregroundColor = customColor;
  } else if (disabled) {
    foregroundColor = color(theme.dark ? white : black)
      .alpha(0.32)
      .rgb()
      .string();
  } else {
    foregroundColor = getContrastingColor(
      backgroundColor,
      white,
      'rgba(0, 0, 0, .54)',
    );
  }

  const rippleColor = color(foregroundColor).alpha(0.32).rgb().string();

  const renderButtonContent = () => (
    <TouchableRipple
      borderless
      onPress={onPress}
      onLongPress={onLongPress}
      rippleColor={rippleColor}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel}
      // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
      accessibilityTraits={disabled ? ['button', 'disabled'] : 'button'}
      accessibilityComponentType="button"
      accessibilityRole="button"
      accessibilityState={{ ...accessibilityState, disabled }}
      style={styles.touchable}
      testID={testID}
    >
      <View
        style={[
          styles.content,
          label ? styles.extended : (small ? styles.small : styles.standard),
        ]}
        pointerEvents="none"
      >
        {icon && loading !== true ? (
          <IconComponent source={icon} size={24} color={foregroundColor} />
        ) : null}
        {loading ? (
          <ActivityIndicator size={18} color={foregroundColor} />
        ) : null}
        {label ? (
          <Text
            selectable={false}
            style={[
              styles.label,
              uppercase && styles.uppercaseLabel,
              { color: foregroundColor, ...theme.fonts.medium },
            ]}
          >
            {label}
          </Text>
        ) : null}
      </View>
    </TouchableRipple>
  );

  const gradient = colors.length !== 0;
  const gradientColors = colors.length !== 1
    ? colors : [...colors, theme.colors.accent];
  return (
    <Surface
      {...rest}
      style={
        [
          {
            backgroundColor,
            opacity: visibility,
            transform: [
              {
                scale: visibility,
              },
            ],
          },
          styles.container,
          disabled && styles.disabled,
          style,
        ] as StyleProp<ViewStyle>
      }
      pointerEvents={visible ? 'auto' : 'none'}
    >
      {gradient
        ? (
          <LinearGradient
            style={{ borderRadius: 28 }}
            start={start}
            end={end}
            colors={gradientColors}
          >
            {renderButtonContent()}
          </LinearGradient>
        )
        : renderButtonContent()}
    </Surface>
  );
};

export default withTheme(FAB);

// @component-docs ignore-next-line
const FABWithTheme = withTheme(FAB);
// @component-docs ignore-next-line
export { FABWithTheme as FAB };
