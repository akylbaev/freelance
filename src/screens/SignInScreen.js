import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    AsyncStorage,
    TextInput,
    Dimensions,
    TouchableOpacity
} from "react-native";

const { width } = Dimensions.get('window');

class SignInScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: null
    })

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            jwt: ''
        }
    }

    singIn = async () => {
        fetch('https://jobfind.herokuapp.com/api/users/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.login,
                password: this.state.password,
            }),
        }).then((response) => {
        response.status == '200' ? response.json().then((responseJson) => {
            AsyncStorage.setItem('userToken', responseJson.token.toString())
            this.props.navigation.navigate('App')
        }) : console.warn("error:", response.status)
        })

            .catch((error) => {
                console.error(error);
            });

    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{ height: 40, borderColor: '#2ecc71', borderWidth: 1, width: width * 0.8, borderRadius: 5 }}
                    onChangeText={(text) => this.setState({ login: text })}
                    placeholder="Email"
                    value={this.state.text}
                    keyboardType={'email-address'}
                />
                <TextInput
                    style={{ height: 40, borderColor: '#2ecc71', borderWidth: 1, width: width * 0.8, borderRadius: 5, marginTop: 5 }}
                    onChangeText={(text) => this.setState({ password: text })}
                    placeholder="Пароль"
                    value={this.state.text}
                    secureTextEntry={true}
                />
                <TouchableOpacity onPress={this.singIn} style={{ height: 40, width: width * 0.8, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2ecc71', borderRadius: 5, marginTop: 20 }}>
                    <Text style={{ color: '#fff', fontWeight: '500', fontSize: 14 }}>Войти</Text>
                </TouchableOpacity>

                <View style={{bottom: 0, flexDirection: 'row'}}>
                    <Text>Еще не зарегистрированы? </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text>Sign Up</Text>
                    </TouchableOpacity>
                </View>
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