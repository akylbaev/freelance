import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    AsyncStorage
} from "react-native";
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation'



import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import MainScreen from '../screens/MainScreen'

import InvitationsScreen from '../screens/InvitationsScreen'
import SubmittedProposalsScreen from '../screens/SubmittedProposalsScreen'
import OffersScreen from '../screens/OffersScreen'
import SettingsScreen from '../screens/SettingsScreen'
import AboutScreen from '../screens/AboutScreen'

import CustomDrawerContentComponent from '../components/CustomDrawerContentComponent'

import ProfileScreen from '../screens/ProfileScreen'
import ProfileEditScreen from '../screens/ProfileEditScreen'


const AuthStackNavigator = createStackNavigator({
    SignIn: SignInScreen,
    SignUp: SignUpScreen
})


const AppStackNavigator = createStackNavigator({
    Main: MainScreen
})

const InvitationsStackNavigator = createStackNavigator({
    Invitations: InvitationsScreen
})

const SubmittedProposalsNavigator = createStackNavigator({
    SubmittedProposals: SubmittedProposalsScreen
})

const OffersNavigator = createStackNavigator({
    Offers: OffersScreen
})

const SettingsNavigator = createStackNavigator({
    Settings: SettingsScreen
})

const AboutNavigator = createStackNavigator({
    About: AboutScreen
})

const ProfileStackNavigator = createStackNavigator({
    Profile: ProfileScreen,
    ProfileEdit: ProfileEditScreen 
})




const AppDrawerNavigator = createDrawerNavigator({
    FindWork: AppStackNavigator,
    Invitations: InvitationsStackNavigator,
    SubmittedProposals: SubmittedProposalsNavigator,
    Offers: OffersNavigator,
    Settings: SettingsNavigator,
    About: AboutNavigator
}, {
        // initialRouteName: FindWork,
        contentComponent: CustomDrawerContentComponent
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

