import React ,{PureComponent} from 'react';
import {
    View
} from "react-native"
import {createSwitchNavigator } from 'react-navigation';
import AppHome from "../view/home/Home"


const AppNavigator = createSwitchNavigator(
    {
        AppHome:AppHome
    },
    {
        initialRouteName:"AppHome"
    }
)

export default  class App  extends PureComponent {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View>
                <AppNavigator>

                </AppNavigator>
            </View>
        )
    }
}