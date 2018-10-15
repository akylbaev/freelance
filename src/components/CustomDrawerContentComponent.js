import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    AsyncStorage,
    Button
} from "react-native";
import Icons from 'react-native-vector-icons/Ionicons'

import { DrawerItems } from 'react-navigation'

class CustomDrawerContentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jwt: '',
            user: {}
        }
    }

    async componentDidMount() {
        await this._retrieveData()
        this.getUserData()
    }

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('userToken');
            if (value !== null) {
                // We have data!!
                this.setState({ jwt: value })
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

    signOut = async () => {
        AsyncStorage.clear()
        this.props.navigation.navigate('AuthLoading')
    }

    render() {
        const props = this.props;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 150, backgroundColor: '#f1f3f6', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity activeOpacity={0.7}>
                    <View style={{ height: 100, width: 100, borderRadius: 50, backgroundColor: 'gray' }}>
                        <Image style={{ width: null, height: null, flex: 1, borderRadius: 50 }} source={{ uri: 'http://www.gravatar.com/avatar/44c4f756beb20c24f22afd2160ba8dfc?s=200&r=pg&d=mm' }} resizeMode={'contain'} />
                    </View>
                    <Text>{this.state.user.handle || 'Username'}</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1 }}>
                    <DrawerItems {...props} />
                </View>
                    <Button title="Sign Out" onPress={this.signOut} />
                
            </View>
        )
    }
}
export default CustomDrawerContentComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});