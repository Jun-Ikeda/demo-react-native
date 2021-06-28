/* eslint-disable react/require-default-props */
import * as React from 'react';
import {
  StyleProp,
  StyleSheet,
  Animated,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import color from 'color';
import Text from 'react-native-paper/src/components/Typography/Text';
import Card from 'react-native-paper/src/components/Card/Card';
import { withTheme } from 'react-native-paper/src/core/theming';
import type { IconSource } from 'react-native-paper/src/components/Icon';

import FAB from './FAB';
import { Theme } from '../../../interface';

const styles = StyleSheet.create({
  safeArea: {
    alignItems: 'flex-end',
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  fab: {
    marginHorizontal: 16,
    marginBottom: 16,
    marginTop: 0,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  label: {
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2,
  },
  item: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

type Props = {
  actions: Array<{
    icon: IconSource;
    label?: string;
    color?: string;
    accessibilityLabel?: string;
    style?: StyleProp<ViewStyle>;
    small?: boolean;
    onPress: () => void;
    testID?: string;
  }>;
  icon: IconSource;
  accessibilityLabel?: string;
  color?: string;
  colors?: string[]
  start?: [number, number];
  end?: [number, number]
  onPress?: () => void;
  open: boolean;
  onStateChange: (state: { open: boolean }) => void;
  visible: boolean;
  style?: StyleProp<ViewStyle>;
  fabStyle?: StyleProp<ViewStyle>;
  theme: Theme;
  testID?: string;
};

const FABGroup = ({
  actions,
  icon,
  open,
  onPress,
  accessibilityLabel,
  theme,
  style,
  fabStyle,
  visible,
  testID,
  onStateChange,
  color: colorProp,
  colors: gradientColors = [],
  start = [0.25, 0.25],
  end = [0.75, 0.75],
}: Props) => {
  const { current: backdrop } = React.useRef<Animated.Value>(
    new Animated.Value(0),
  );
  const animations = React.useRef<Animated.Value[]>(
    actions.map(() => new Animated.Value(open ? 1 : 0)),
  );

  const [prevActions, setPrevActions] = React.useState<
  | {
    icon: IconSource;
    label?: string;
    color?: string;
    accessibilityLabel?: string;
    style?: StyleProp<ViewStyle>;
    onPress:() => void;
    testID?: string;
  }[]
  | null
  >(null);

  const { scale } = theme.animation;

  React.useEffect(() => {
    if (open) {
      Animated.parallel([
        Animated.timing(backdrop, {
          toValue: 1,
          duration: 250 * scale,
          useNativeDriver: true,
        }),
        Animated.stagger(
          50 * scale,
          animations.current
            .map((animation) => Animated.timing(animation, {
              toValue: 1,
              duration: 150 * scale,
              useNativeDriver: true,
            }))
            .reverse(),
        ),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(backdrop, {
          toValue: 0,
          duration: 200 * scale,
          useNativeDriver: true,
        }),
        ...animations.current.map((animation) => Animated.timing(animation, {
          toValue: 0,
          duration: 150 * scale,
          useNativeDriver: true,
        })),
      ]).start();
    }
  }, [open, actions, backdrop, scale]);

  const close = () => onStateChange({ open: false });

  const toggle = () => onStateChange({ open: !open });

  const { colors } = theme;

  const labelColor = theme.dark
    ? colors.text
    : color(colors.text).fade(0.54).rgb().string();
  const backdropOpacity = open
    ? backdrop.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 1],
    })
    : backdrop;

  const opacities = animations.current;
  const scales = opacities.map((opacity) => (open
    ? opacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0.8, 1],
    })
    : 1));

  if (actions.length !== prevActions?.length) {
    animations.current = actions.map(
      (_, i) => animations.current[i] || new Animated.Value(open ? 1 : 0),
    );
    setPrevActions(actions);
  }

  return (
    <View pointerEvents="box-none" style={[styles.container, style]}>
      <TouchableWithoutFeedback onPress={close}>
        <Animated.View
          pointerEvents={open ? 'auto' : 'none'}
          style={[
            styles.backdrop,
            {
              opacity: backdropOpacity,
              backgroundColor: colors.backdrop,
            },
          ]}
        />
      </TouchableWithoutFeedback>
      <SafeAreaView pointerEvents="box-none" style={styles.safeArea}>
        <View pointerEvents={open ? 'box-none' : 'none'}>
          {actions.map((it, i) => (
            <View
              key={i} // eslint-disable-line react/no-array-index-key
              style={[
                styles.item,
                {
                  marginHorizontal:
                    typeof it.small === 'undefined' || it.small ? 24 : 16,
                },
              ]}
              pointerEvents={open ? 'box-none' : 'none'}
            >
              {it.label && (
                <View>
                  <Card
                    style={
                      [
                        styles.label,
                        {
                          transform: [{ scale: scales[i] }],
                          opacity: opacities[i],
                        },
                      ] as StyleProp<ViewStyle>
                    }
                    onPress={() => {
                      it.onPress();
                      close();
                    }}
                    accessibilityLabel={
                      it.accessibilityLabel !== 'undefined'
                        ? it.accessibilityLabel
                        : it.label
                    }
                    // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
                    accessibilityTraits="button"
                    accessibilityComponentType="button"
                    accessibilityRole="button"
                  >
                    <Text style={{ color: labelColor }}>{it.label}</Text>
                  </Card>
                </View>
              )}
              <FAB
                small={typeof it.small !== 'undefined' ? it.small : true}
                icon={it.icon}
                color={it.color}
                start={start}
                end={end}
                style={
                  [
                    {
                      transform: [{ scale: scales[i] }],
                      opacity: opacities[i],
                      backgroundColor: theme.colors.surface,
                    },
                    it.style,
                  ] as StyleProp<ViewStyle>
                }
                onPress={() => {
                  it.onPress();
                  close();
                }}
                accessibilityLabel={
                  typeof it.accessibilityLabel !== 'undefined'
                    ? it.accessibilityLabel
                    : it.label
                }
                // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
                accessibilityTraits="button"
                accessibilityComponentType="button"
                accessibilityRole="button"
                testID={it.testID}
                visible={open}
              />
            </View>
          ))}
        </View>
        <FAB
          onPress={() => {
            onPress?.();
            toggle();
          }}
          icon={icon}
          color={colorProp}
          accessibilityLabel={accessibilityLabel}
          colors={gradientColors}
          // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
          accessibilityTraits="button"
          accessibilityComponentType="button"
          accessibilityRole="button"
          accessibilityState={{ expanded: open }}
          style={[styles.fab, fabStyle]}
          visible={visible}
          testID={testID}
        />
      </SafeAreaView>
    </View>
  );
};

FABGroup.displayName = 'FAB.Group';

export default withTheme(FABGroup);

// @component-docs ignore-next-line
const FABGroupWithTheme = withTheme(FABGroup);
// @component-docs ignore-next-line
export { FABGroupWithTheme as FABGroup };
