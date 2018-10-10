import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Button,
    AsyncStorage,
    TouchableOpacity
} from "react-native";

import Icons from 'react-native-vector-icons/Ionicons'

class MainScreen extends Component {


    static navigationOptions = ({ navigation }) => ({
        title: 'Freelance.kz',
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <View style={{ paddingHorizontal: 10 }}>
                    <Icons name="md-menu" size={24} />
                </View>
            </TouchableOpacity>
        )
    })

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('userToken');
            if (value !== null) {
                // We have data!!
                console.warn(value);
            }
        } catch (error) {
            console.error(error)
        }
    }




    signOut = async () => {
        AsyncStorage.clear()
        this.props.navigation.navigate('AuthLoading')
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign Out" onPress={this.signOut} />
                <Button title="Show JWT" onPress={this._retrieveData} />
            </View>
        );
    }
}
export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});