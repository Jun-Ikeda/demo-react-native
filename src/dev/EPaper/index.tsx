import { useIsFocused } from '@react-navigation/native';
import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
} from 'react-native';
import {
  Text,
  Card,
  Avatar,
  Button,
  Title,
  Paragraph,
  Portal,
} from 'react-native-paper';

import {
  EContainer, EButton, EIconButton, EFAB, EFABGroup,
} from '../../components/epaper';
import { Color } from '../../config';

interface EPaperProps {
  navigation: any
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

const EPaper = (props: EPaperProps) => {
  const isFocused = useIsFocused();

  const renderButtons = () => (
    <>
      <EButton
        mode="contained"
        style={{ alignSelf: 'center' }}
        colors={[Color.green[7]]}
        // labelStyle={{ color: 'white' }}
        onPress={() => alert('aiueo')}
      >
        Test Button
      </EButton>
      <EIconButton
        icon="camera"
        style={{ alignSelf: 'center' }}
        colors={[Color.green[7]]}
        // labelStyle={{ color: 'white' }}
        onPress={() => alert('aiueo')}
      />
    </>
  );

  const renderCard = () => (
    <Card style={{ margin: 10 }}>
      <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => (<Avatar.Icon {...props} icon="folder" />)} />
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1531884070720-875c7622d4c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80' }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );

  const [state, setState] = React.useState({ open: false });
  const renderFAB = () => {
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;
    return (
      <Portal>
        <EFABGroup
          visible={isFocused}
          color="white"
          fabStyle={{ marginBottom: 76 }}
          colors={[Color.green[4]]}
          open={open}
          icon={open ? 'calendar-today' : 'plus'}
          actions={[
            { icon: 'plus', onPress: () => console.log('Pressed add') },
            {
              icon: 'star',
              label: 'Star',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'email',
              label: 'Email',
              onPress: () => console.log('Pressed email'),
            },
            {
              icon: 'bell',
              label: 'Remind',
              onPress: () => console.log('Pressed notifications'),
              small: false,
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
            // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    );
  };
  return (
    <EContainer style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text>HelloWorld</Text>
        {renderButtons()}
        {renderCard()}
        {renderFAB()}
      </SafeAreaView>
    </EContainer>
  );
};

export default EPaper;
