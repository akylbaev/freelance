import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Icons from 'react-native-vector-icons/Ionicons'

class SubmittedProposalsScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Отклики',
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
                <Icons name="md-document" size = {100} color={'#dadada'} />
                <Text style = {{textAlign: 'center', fontSize: 22, fontWeight: '600'}}>
                    No Submitted Proposals
                </Text>
                <Text style = {{textAlign: 'center', fontSize: 14, fontWeight: '200'}}>
                    You do not have any submitted{"\n"}proposals at this time.
                </Text>
            </View>
        );
    }
}
export default SubmittedProposalsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});