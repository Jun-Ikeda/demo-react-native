import React from 'react';
import {
  View,
  TouchableOpacity, Text, Dimensions,
} from 'react-native';
import { line, curveBasis } from 'd3-shape';
import { Svg, Path } from 'react-native-svg';

import { navigate } from './ref';

interface TabsHandlerProps {
}

const tabs = [
  { name: 'SharedElement' },
  { name: 'EPaper' },
  { name: 'SVG' },
  { name: 'Neumorphic' },
];

const { width: wWidth } = Dimensions.get('window');
const lineGenerator = line()
  .x(({ x }) => x)
  .y(({ y }) => y);

const NAVIGATION_BOTTOM_TABS_HEIGHT = 60;

const TabsHandler = () => {
  const [tabWidth, setTabWidth] = React.useState(40);
  const d = React.useMemo(() => {
    const left = lineGenerator([
      { x: 0, y: 0 },
      { x: tabWidth * 2, y: 0 },
    ]);
    const right = lineGenerator([
      { x: tabWidth * 3, y: 0 },
      { x: wWidth, y: 0 },
      { x: wWidth, y: NAVIGATION_BOTTOM_TABS_HEIGHT },
      { x: 0, y: NAVIGATION_BOTTOM_TABS_HEIGHT },
      { x: 0, y: 0 },
    ]);

    const center = lineGenerator.curve(curveBasis)([
      { x: tabWidth * 2, y: 0 },
      { x: tabWidth * 2 + 5, y: 0 },
      { x: tabWidth * 2 + 15, y: NAVIGATION_BOTTOM_TABS_HEIGHT * 0.45 },
      { x: tabWidth * 3 - 15, y: NAVIGATION_BOTTOM_TABS_HEIGHT * 0.45 },
      { x: tabWidth * 3 - 5, y: 0 },
      { x: tabWidth * 3, y: 0 },
    ]);

    return `${left} ${center} ${right}`;
  }, [tabWidth]);

  return (
    <View style={{
      height: 60,
      alignSelf: 'stretch',
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-around',
    }}
    >
      {tabs.map((tab) => (
        <TouchableOpacity key={tab.name} onPress={() => navigate(tab.name)}>
          <Text>{tab.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
  // return (
  //   <Svg width={wWidth} {...{ height: NAVIGATION_BOTTOM_TABS_HEIGHT }}>
  //     <Path fill="white" d={d} />
  //   </Svg>
  // );
};

export default TabsHandler;
