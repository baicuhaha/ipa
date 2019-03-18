/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{PureComponent} from 'react';
import AppNavigator from './App/routes/AppNavigator';
import { Provider } from 'react-redux'
import configureStore from './App/routes/ConfigureStore';

const store = configureStore()
export default class App extends PureComponent {

    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}
