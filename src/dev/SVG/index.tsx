import * as React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions,
  LayoutAnimation,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { EButton, EContainer } from '../../components/epaper';

const layout = Dimensions.get('window');
const threshold = 130;

interface SVGProps {
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

const TabIconShape = () => {
  const d = 'm10 5c10-5 30-5 40 0c2.5 1.25 3.75 2.5 5 5c5 10 5 30 0 40c-1.25 2.5-2.5 3.75-5 5c-10 5-30 5-40 0c-2.5-1.25-3.75-2.5-5-5c-5-10-5-30 0-40c1.25-2.5 2.5-3.75 5-5';
  return (
    <Svg style={{ height: 60, width: 60 }}>
      <Path d={d} stroke="white" fill="white" />
    </Svg>
  );
};

const TabsContainerShape = ({ x }) => {
  const test = `M 0,0 
  h ${layout.width / 2 - 80} 
  c 55,0 30,40 80,40
  c 55,0 30,-40 80,-40
  h ${layout.width / 2 - 80}
  v 60
  h -${layout.width}
  z
  `;
  const renderSvg = () => (
    <Svg style={{ left: x }}>
      <Path
        d={test} // width: layout.width, height: 60
        fill="white"
        // stroke="red"
      />
      <View style={{
        position: 'absolute', left: -threshold, height: 60, width: threshold, backgroundColor: 'white',
      }}
      />
      <View style={{
        position: 'absolute', left: layout.width, height: 60, width: threshold, backgroundColor: 'white',
      }}
      />
    </Svg>
  );

  return (
    <View style={{
      /* position: 'absolute', bottom: 0, right: 0, left: 0, height: 60, */
      height: 60, width: 'auto',
    }}
    >
      {renderSvg()}
    </View>
  );
};

const SVG = (props: SVGProps) => {
  const [x, setX] = React.useState(0);
  return (
    <EContainer style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          // borderWidth: 1,
          borderColor: 'yellow',
        }}
        >
          <TabsContainerShape x={x} />
          <TabIconShape />
          <TabIconShape />
          <TabIconShape />
        </View>
        <EButton
          mode="contained"
          onPress={() => {
            LayoutAnimation.easeInEaseOut();
            setX(-threshold);
          }}
        >
          Left
        </EButton>
        <EButton
          mode="contained"
          onPress={() => {
            LayoutAnimation.easeInEaseOut();
            setX(threshold);
          }}
        >
          Right
        </EButton>

      </SafeAreaView>
    </EContainer>
  );
};

export default SVG;
