import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Button
} from "react-native";
import Icons from 'react-native-vector-icons/Ionicons'

class OffersScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Мои Проекты',
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
                <Icons name="md-briefcase" size = {100} color={'#dadada'} />
                <Text style = {{textAlign: 'center', fontSize: 22, fontWeight: '600'}}>
                    No Pending Offers
                </Text>
                <Text style = {{textAlign: 'center', fontSize: 14, fontWeight: '200'}}>
                    Find a work and submit proposals.
                </Text>
            </View>
        );
    }
}
export default OffersScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});