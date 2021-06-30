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
  const d = 'M 15 5 C 23 1 37 1 45 5 C 49 7 53 11 55 15 C 59 23 59 37 55 45 C 53 49 49 53 45 55 C 37 59 23 59 15 55 C 11 53 7 49 5 45 C 1 36 1 23 5 15 C 7 11 11 7 15 5';
  return (
    <Svg style={{
      height: 60, width: 60,
    }}
    >
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
          <View style={{
            flexDirection: 'row', justifyContent: 'space-around', position: 'absolute', right: 0, bottom: 0, left: 0, top: 0,
          }}
          >
            <TabIconShape />
            <TabIconShape />
            <TabIconShape />
          </View>
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
