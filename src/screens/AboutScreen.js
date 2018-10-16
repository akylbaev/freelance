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
        title: 'О Приложений',
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
                <TouchableOpacity activeOpacity={0.7} style={{borderBottomColor:'#aeaeae', borderBottomWidth:1, height: 50, justifyContent: 'center'}}>
                    <Text style={{marginLeft: 15, fontWeight: '400', fontSize: 16, color: '#3d3d3d'}}>Политика Конфиденциальности</Text>
                </TouchableOpacity>

                <View style={{borderBottomColor:'#aeaeae', borderBottomWidth:1, height:65, justifyContent: 'center'}}>
                    <Text style={{marginLeft: 15, fontWeight: '400', fontSize: 16, color: '#3d3d3d'}}>Версия приложения</Text>
                    <Text style={{marginLeft: 16, fontWeight: '200', fontSize: 14, color: '#aeaeae'}}>v1.0.0</Text>
                </View>
            </View>
        );
    }
}
export default AboutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});