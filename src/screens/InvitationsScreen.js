import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Icons from 'react-native-vector-icons/Ionicons'

class InvitationsScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Invitations',
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
                <Text>InvitationsScreen</Text>
            </View>
        );
    }
}
export default InvitationsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});