import React from 'react';
import {
  View,
  TouchableOpacity, Text, Dimensions,
} from 'react-native';
// import { line, curveBasis } from 'd3-shape';
import { Svg, Path } from 'react-native-svg';

import { tabs } from './ref';

interface TabsHandlerProps {
  activeTabState: [string, Function]
}

const TabsHandler = (props: TabsHandlerProps) => {
  const [tabWidth, setTabWidth] = React.useState(40);
  const { activeTabState } = props;
  const [activeTab, setActiveTab] = activeTabState;
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
        <TouchableOpacity key={tab.name} onPress={() => setActiveTab(tab.name)}>
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
