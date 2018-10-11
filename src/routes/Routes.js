import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    AsyncStorage
} from "react-native";
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation'

import Icons from 'react-native-vector-icons/Ionicons'

import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import MainScreen from '../screens/MainScreen'

import InvitationsScreen from '../screens/InvitationsScreen'
import SubmittedProposalsScreen from '../screens/SubmittedProposalsScreen'
import OffersScreen from '../screens/OffersScreen'
import SettingsScreen from '../screens/SettingsScreen'
import AboutScreen from '../screens/AboutScreen'


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

class CustomDrawerContentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jwt: '',
            user: {}
        }
    }

    async componentWillMount(){
        await this._retrieveData()
        this.getUserData()
    }

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('userToken');
            if (value !== null) {
                // We have data!!
                this.setState({jwt: value})
            }
        } catch (error) {
            console.error(error)
        }
    }

    getUserData() {
        fetch('https://jobfind.herokuapp.com/api/profile', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Authorization': this.state.jwt,
            },
        }).then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                user: responseJson
            })
        })
        .catch((error) => {
          console.error(error);
        });
    }

    render(){
        const props = this.props;
        return (
        <View style={{flex: 1}}>
            <View style={{ height: 150, backgroundColor: '#f1f3f6', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ height: 100, width: 100, borderRadius: 50, backgroundColor: 'gray' }}>
                    <Image style={{width: null, height: null, flex: 1, borderRadius: 50}} source={{uri: 'http://www.gravatar.com/avatar/44c4f756beb20c24f22afd2160ba8dfc?s=200&r=pg&d=mm'}} resizeMode={'contain'}/>
                </View>
                <Text>{ this.state.user.handle || 'Username' }</Text>
            </View>

            <View style={{ flex: 1 }}>
                <DrawerItems {...props} />
            </View>
        </View>
        )
    }
}

// const CustomDrawerContentComponent = (props) => (
//     <View style={{flex: 1}}>
//         <View style={{ height: 150, backgroundColor: '#f1f3f6', alignItems: 'center', justifyContent: 'center' }}>
//             <View style={{ height: 100, width: 100, borderRadius: 50, backgroundColor: 'gray' }}>
//                 <Image style={{width: null, height: null, flex: 1, borderRadius: 50}} source={{uri: 'http://www.gravatar.com/avatar/44c4f756beb20c24f22afd2160ba8dfc?s=200&r=pg&d=mm'}} resizeMode={'contain'}/>
//             </View>
//             <Text>programmeister</Text>
//         </View>

//         <View style={{ flex: 1 }}>
//             <DrawerItems {...props} />
//         </View>
//     </View>
// )

const AppDrawerNavigator = createDrawerNavigator({
    "Find Work": AppStackNavigator,
    Invitations: InvitationsStackNavigator,
    "Submitted Proposals": SubmittedProposalsNavigator,
    Offers: OffersNavigator,
    Settings: SettingsNavigator,
    About: AboutNavigator
}, {
        initialRouteName: 'Find Work',
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

