import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button,
    AsyncStorage
} from "react-native";

class SignInScreen extends Component {

    singIn = async() =>{
        await AsyncStorage.setItem('userToken', 'varun')

        this.props.navigation.navigate('App')
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign In" onPress={this.singIn} />
                <Button title="Sign Up" onPress={()=>this.props.navigation.navigate('SignUp')} />
            </View>
        );
    }
}
export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});