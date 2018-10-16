import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class DetailedProject extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Детально'
    })

    render() {
        return (
            <View style={styles.container}>
                <Text>DetailedProject</Text>
            </View>
        );
    }
}
export default DetailedProject;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});