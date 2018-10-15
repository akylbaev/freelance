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



    

    render() {
        return (
            <View style={styles.container}>
                
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