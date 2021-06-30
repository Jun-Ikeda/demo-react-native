import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { tabs } from './ref';
import TabsHandler from './TabsHandler';

const Stack = createStackNavigator();

const DevNavigator = () => {
  const [activeTab, setActiveTab] = React.useState('EPaper');
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator headerMode="none">
        {tabs.map(({ name, component }) => ((name === activeTab) ? (
          <Stack.Screen name={name} component={component} key={name} />
        ) : null))}
      </Stack.Navigator>
      <TabsHandler activeTabState={[activeTab, setActiveTab]} />
    </NavigationContainer>
  );
};

export default DevNavigator;
