import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { EContainer } from '../../components/epaper';

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

const SVG = (props: SVGProps) => {
  const curve = 'M-17.5 378.5C31.5 32.5 302.5 463 375 89C447.5 -285 375 644 375 644H0C0 644 -66.5 724.5 -17.5 378.5Z';
  const heart = 'M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z';
  const test = `M 0,200 
  h 100 
  c 50,0 30,40 80,40
  c 50,0 30,-40 80,-40
  h 100
  v 60
  h -360
  z
  `;
  const renderSvg = () => (
    <Svg style={{ flex: 1 }}>
      <Path
        d={test} // put your path here
        fill="white"
        // stroke="red"
      />
    </Svg>
  );
  return (
    <EContainer style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        {renderSvg()}
      </SafeAreaView>
    </EContainer>
  );
};

export default SVG;
