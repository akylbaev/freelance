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

import Icons from 'react-native-vector-icons/Ionicons'

import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import MainScreen from '../screens/MainScreen'
import DetailedProject from '../screens/DetailedProject'

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
    Main: MainScreen,
    Project: DetailedProject
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
    FindWork: {
        screen: AppStackNavigator,
        navigationOptions: {
            drawerLabel: 'Найти работу',
            drawerIcon: ({ tintColor }) => (
                <Icons name="md-briefcase" size={22} color={tintColor} />
            ),
        },
    },

    Invitations: {
        screen: InvitationsStackNavigator,
        navigationOptions: {
            drawerLabel: 'Приглашения',
            drawerIcon: ({ tintColor }) => (
                <Icons name="md-person-add" size={22} color={tintColor} />
            ),
        },
    },
    SubmittedProposals: {
        screen: SubmittedProposalsNavigator,
        navigationOptions: {
            drawerLabel: 'Отклики',
            drawerIcon: ({ tintColor }) => (
                <Icons name="md-document" size={22} color={tintColor} />
            ),
        },
    },
    Offers: {
        screen: OffersNavigator,
        navigationOptions: {
            drawerLabel: 'Проекты',
            drawerIcon: ({ tintColor }) => (
                <Icons name="ios-briefcase" size={22} color={tintColor} />
            ),
        },
    },
    Settings: {
        screen: SettingsNavigator,
        navigationOptions: {
            drawerLabel: 'Настройки',
            drawerIcon: ({ tintColor }) => (
                <Icons name="md-settings" size={22} color={tintColor} />
            ),
        },
    },
    About: {
        screen: AboutNavigator,
        navigationOptions: {
            drawerLabel: 'О Приложений',
            drawerIcon: ({ tintColor }) => (
                <Icons name="md-information-circle" size={22} color={tintColor} />
            ),
        },
    },
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

