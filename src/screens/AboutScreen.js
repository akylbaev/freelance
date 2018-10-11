import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Icons from 'react-native-vector-icons/Ionicons'

class AboutScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'About',
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <View style={{ paddingHorizontal: 10 }}>
                    <Icons name="md-menu" size={24} />
                </View>
            </TouchableOpacity>
        ),
        drawerIcon: (
            <Icons name="md-home" size={24} />
        ),
    })

    render() {
        return (
            <View style={styles.container}>
                <Text>AboutScreen</Text>
            </View>
        );
    }
}
export default AboutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});