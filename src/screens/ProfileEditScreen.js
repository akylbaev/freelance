import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class ProfileEditScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ProfileEditScreen</Text>
            </View>
        );
    }
}
export default ProfileEditScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});