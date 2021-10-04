import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { BrowserViewControllerConnected } from './src/browser/BrowserViewController.tsx';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
class AppContainer extends React.Component {
    render() {
        const {} = this.props;
        return (React.createElement(SafeAreaProvider, null,
            React.createElement(Provider, { store: store },
                React.createElement(NavigationContainer, null,
                    React.createElement(BrowserViewControllerConnected, null)))));
    }
}
export default AppContainer;
//# sourceMappingURL=App.js.map