import React, { Component } from "react";
import {createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator} from 'react-navigation'

import Icons from 'react-native-vector-icons/Ionicons'

import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import MainScreen from '../screens/MainScreen'



const AuthStackNavigator = createStackNavigator({
    SignIn: SignInScreen,
    SignUp: SignUpScreen
})


const AppStackNavigator = createStackNavigator({
    Main: MainScreen
})

const AppDrawerNavigator = createDrawerNavigator({
    Home: AppStackNavigator
})

const AppSwitchNavigator = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStackNavigator,
    App: AppDrawerNavigator
})
class Routes extends Component {
    render() {
        return (
            <AppSwitchNavigator />
        );
    }
}
export default Routes;

