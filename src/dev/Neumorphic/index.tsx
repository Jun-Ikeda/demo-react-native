import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import {
  Text,
  TouchableRipple,
} from 'react-native-paper';

import {
  EContainer,
} from '../../components/epaper';
import { Color } from '../../config';
import { NeuContainer } from '../../components/neumorphic';

interface NeumorphicProps {
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

const Neumorphic = (props: NeumorphicProps) => {
  const renderShadow = () => {
    const renderContent = () => (
      <TouchableRipple
        style={{
          width: 120,
          height: 40,
          // backgroundColor: Color.white[2],
          borderRadius: 10,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        borderless
        onPress={() => console.log('aiueo')}
      >
        <Text style={{ color: Color.green[4] }}>aiueo</Text>
      </TouchableRipple>
    );
    return (
      <>
        <NeuContainer
          elevation={4}
          radius={10}
          containerStyle={{ alignSelf: 'center', margin: 20 }}
        >
          {renderContent()}
        </NeuContainer>
      </>
    );
  };
  return (
    <EContainer style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        {renderShadow()}
      </SafeAreaView>
    </EContainer>
  );
};

export default Neumorphic;
