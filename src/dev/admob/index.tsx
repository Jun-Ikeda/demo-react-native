import * as React from 'react';
import { AdMobBanner, PublisherBanner } from 'expo-ads-admob';
import {
  Text, View, StyleSheet, Platform, StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface AdMobProps {}

const AdMob = (props: AdMobProps) => (
  <SafeAreaView style={styles.container}>
    <AdMobBanner
      bannerSize="fullBanner"
      adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
      servePersonalizedAds // true or false
      // onDidFailToReceiveAdWithError={this.bannerError}
    />
    <PublisherBanner
      bannerSize="fullBanner"
      adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
    />
    <Text>aiueo</Text>
  </SafeAreaView>
);

export default AdMob;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
