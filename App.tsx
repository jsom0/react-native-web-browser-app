import React from 'react';
import {Provider} from 'react-redux';
import {View, Text} from 'react-native';
import {store} from './src/store/store';
import {BrowserViewControllerConnected} from './src/browser/BrowserViewController.tsx';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

interface Props {}

interface State {}
class AppContainer extends React.Component<Props, State> {
  render() {
    const {} = this.props;

    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <NavigationContainer>
            <BrowserViewControllerConnected />
          </NavigationContainer>
        </Provider>
      </SafeAreaProvider>
    );
  }
}

export default AppContainer;
