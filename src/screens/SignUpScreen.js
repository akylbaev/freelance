import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from "react-native";
import { Hoshi } from 'react-native-textinput-effects';
  
  const { width } = Dimensions.get('window');

class SignUpScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Регистрация',
    })


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            login: '',
            password: '',
            password2: ''
        }
    }

    

    singUp = async () => {
        fetch('https://jobfind.herokuapp.com/api/users/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.login,
                password: this.state.password,
                password2: this.state.password2,
            }),
        }).then((response) => {
            console.warn(response.status)
        })

            .catch((error) => {
                console.error(error);
            });

    }

    render() {
        return (
            <View
                style={styles.container}
            >
                <View style={[styles.card1, { backgroundColor: '#F9F7F6' }]}>
                    <Hoshi label={'Имя'} borderColor={'#b76c94'} maskColor={'#F9F7F6'} onChangeText={(text) => this.setState({ name: text })}/>
                    <Hoshi
                        label={'Email'}
                        maskColor={'#F9F7F6'}
                        borderColor={'#7ac1ba'}
                        onChangeText={(text) => this.setState({ login: text })}
                        keyboardType = {'email-address'}
                    />
                    <Hoshi
                        label={'Пароль'}
                        maskColor={'#F9F7F6'}
                        borderColor={'#7ac1ba'}
                        onChangeText={(text) => this.setState({ password: text })}
                        secureTextEntry={true}
                    />
                    <Hoshi
                        label={'Подтвердите пароль'}
                        maskColor={'#F9F7F6'}
                        borderColor={'#7ac1ba'}
                        onChangeText={(text) => this.setState({ password2: text })}
                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity onPress={this.singUp} style={{ height: 40, width: width * 0.8, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2ecc71', borderRadius: 5, marginTop: 20 }}>
                    <Text style={{ color: '#fff', fontWeight: '500', fontSize: 14 }}>Зарегистрироваться</Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}
export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    card1: {
        paddingVertical: 16,
        flex: 1
    },
    card2: {
        padding: 16,
    },
    input: {
        marginTop: 4,
        height: 50
    },
    title: {
        paddingBottom: 16,
        textAlign: 'center',
        color: '#404d5b',
        fontSize: 20,
        fontWeight: 'bold',
        opacity: 0.8,
    },
});