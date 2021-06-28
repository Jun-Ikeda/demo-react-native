/* eslint-disable react/require-default-props */
import * as React from 'react';
import {
  View, ViewProps, LayoutAnimation, ViewStyle,
} from 'react-native';
import { BoxShadow } from 'react-native-shadow';
import { merge } from 'lodash';
import { withTheme } from 'react-native-paper';
import { Color } from '../../config';
import { Theme } from '../../interface';

const switchGradient = (color: string) => {
  let light = {};
  let dark = {};
  switch (color) {
    case Color.white[2]:
      light = { opacity: 0.8, borde: 8 };
      dark = { opacity: 0.1, border: 8 };
      break;
    case Color.black[5]:
      light = { opacity: 0.1 };
      dark = { opacity: 0.4 };
      break;
    default:
      break;
  }
  return [light, dark];
};

interface NeuContainerProps extends ViewProps {
  elevation?: number,
  light?: { color?: string, opacity?: number }
  dark?: { color?: string, opacity?: number }
  radius?: number
  circle?: boolean
  color?: string | undefined
  containerStyle?: ViewStyle
  children: React.ReactNode
  theme: Theme
}

const defaultProps = {
  light: { color: '#fff', opacity: 0.2 },
  dark: { color: '#000', opacity: 0.2 },
};

const NeuContainer = ({
  elevation = 12,
  radius = 0,
  circle = false,
  containerStyle = {},
  color = undefined,
  ...props
}: NeuContainerProps) => {
  const {
    light, dark, children, theme, ...viewProps
  } = props;

  const [layout, setLayout] = React.useState({ height: 1000, width: 1000 });
  const [opacity, setOpacity] = React.useState(0);

  const backgroundColor: string = color || theme.colors.background;
  const borderRadius = circle ? layout.height / 2 : radius;

  const onLayout = (e) => {
    const { height, width } = e.nativeEvent.layout;
    setLayout({ height, width });
    setOpacity(1);
    LayoutAnimation.easeInEaseOut();
  };

  const shadowOpt = {
    ...layout,
    border: 12,
    radius: borderRadius,
  };
  const [lightColorAdjust, darkColorAdjust] = switchGradient(backgroundColor);
  const darkShadowOpt = {
    x: elevation,
    y: elevation,
    ...defaultProps.dark,
    ...shadowOpt,
    ...dark,
    ...darkColorAdjust,
  };
  const lightShadowOpt = {
    x: -elevation,
    y: -elevation,
    ...defaultProps.light,
    ...lightColorAdjust,
    ...light,
    ...shadowOpt,
  };

  return (
    <View style={[{ opacity }, containerStyle]}>
      <BoxShadow setting={darkShadowOpt}>
        <BoxShadow setting={lightShadowOpt}>
          <View
            style={[{
              alignSelf: 'flex-start',
              backgroundColor,
              borderRadius,
            }, viewProps.style]}
            onLayout={onLayout}
          >
            {children}
          </View>
        </BoxShadow>
      </BoxShadow>
    </View>
  );
};

/*
    <BoxShadow setting={lightShadowOpt}>
      <BoxShadow setting={darkShadowOpt}>
      </BoxShadow></BoxShadow>
      */
export default withTheme(NeuContainer);
