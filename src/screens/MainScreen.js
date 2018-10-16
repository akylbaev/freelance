import React, { Component } from "react";
import {
    View,
    StyleSheet,
    AsyncStorage,
    TouchableOpacity,
    Text,
    Dimensions,
    ScrollView
} from "react-native";

import Icons from 'react-native-vector-icons/Ionicons'
import FAIcon from 'react-native-vector-icons/FontAwesome5'

const { width } = Dimensions.get('window');

class MainScreen extends Component {




    static navigationOptions = ({ navigation }) => ({
        title: 'Freelance.kz',
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <View style={{ paddingHorizontal: 10 }}>
                    <Icons name="md-menu" size={24} />
                </View>
            </TouchableOpacity>
        )
    })



    pushDetailedProject(data){
        this.props.navigation.push('Project', data)
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <TouchableOpacity activeOpacity={0.7} onPress={()=>this.pushDetailedProject()} style={{ borderBottomColor: '#aeaeae', borderBottomWidth: 1, height: 170, justifyContent: 'center', width: width }}>
                    <Text numberOfLines={2} style={{ paddingHorizontal: 15, width: width, fontWeight: '500', fontSize: 15, color: '#2ecc71' }}>React Native developer</Text>
                    <View style={{ marginLeft: 15, flexDirection: 'row', marginTop: 12 }}>
                        <Text style={{ fontWeight: '500', fontSize: 11, color: '#3d3d3d' }}>Почасовая Оплата</Text>
                        <Text style={{ fontWeight: '300', fontSize: 11, color: '#3d3d3d' }}> - 7 минут назад</Text>
                    </View>
                    <View style={{ marginLeft: 15, flexDirection: 'row', marginTop: 12 }}>
                        <View>
                            <Text style={{ fontWeight: '300', fontSize: 11, color: '#3d3d3d' }}>Уровень Знания</Text>
                            <Text style={{ fontWeight: '400', fontSize: 14, color: '#3d3d3d' }}>Intermediate</Text>
                        </View>
                        <View style={{ marginLeft: 50 }}>
                            <Text style={{ fontWeight: '300', fontSize: 11, color: '#3d3d3d' }}>Бюджет</Text>
                            <Text style={{ fontWeight: '400', fontSize: 14, color: '#3d3d3d' }}>300,000₸</Text>
                        </View>
                    </View>


                    <View style={{ paddingHorizontal: 15, flexDirection: 'row', marginTop: 12, width: width, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FAIcon name="star" size={18} color={'orange'} />
                            <Text style={{ fontWeight: '400', fontSize: 13, color: '#3d3d3d', marginLeft: 10 }}>4.85 (36)</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FAIcon name="check-circle" size={20} color={'skyblue'} />
                            <Text style={{ fontWeight: '400', fontSize: 13, color: '#3d3d3d', marginLeft: 10 }}>Платежеспособный</Text>
                        </View>
                        <TouchableOpacity>
                            <FAIcon name="heart" size={20} color={'#3d3d3d'} />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>

                
                <TouchableOpacity activeOpacity={0.7} style={{ borderBottomColor: '#aeaeae', borderBottomWidth: 1, height: 170, justifyContent: 'center', width: width }}>
                    <Text numberOfLines={2} style={{ paddingHorizontal: 15, width: width, fontWeight: '500', fontSize: 15, color: '#2ecc71' }}>React Native developer</Text>
                    <View style={{ marginLeft: 15, flexDirection: 'row', marginTop: 12 }}>
                        <Text style={{ fontWeight: '500', fontSize: 11, color: '#3d3d3d' }}>Почасовая Оплата</Text>
                        <Text style={{ fontWeight: '300', fontSize: 11, color: '#3d3d3d' }}> - 7 минут назад</Text>
                    </View>
                    <View style={{ marginLeft: 15, flexDirection: 'row', marginTop: 12 }}>
                        <View>
                            <Text style={{ fontWeight: '300', fontSize: 11, color: '#3d3d3d' }}>Уровень Знания</Text>
                            <Text style={{ fontWeight: '400', fontSize: 14, color: '#3d3d3d' }}>Intermediate</Text>
                        </View>
                        <View style={{ marginLeft: 50 }}>
                            <Text style={{ fontWeight: '300', fontSize: 11, color: '#3d3d3d' }}>Бюджет</Text>
                            <Text style={{ fontWeight: '400', fontSize: 14, color: '#3d3d3d' }}>300,000₸</Text>
                        </View>
                    </View>


                    <View style={{ paddingHorizontal: 15, flexDirection: 'row', marginTop: 12, width: width, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FAIcon name="star" size={18} color={'orange'} />
                            <Text style={{ fontWeight: '400', fontSize: 13, color: '#3d3d3d', marginLeft: 10 }}>4.85 (36)</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FAIcon name="check-circle" size={20} color={'skyblue'} />
                            <Text style={{ fontWeight: '400', fontSize: 13, color: '#3d3d3d', marginLeft: 10 }}>Платежеспособный</Text>
                        </View>
                        <TouchableOpacity>
                            <FAIcon name="heart" size={20} color={'#3d3d3d'} />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity activeOpacity={0.7} style={{ borderBottomColor: '#aeaeae', borderBottomWidth: 1, height: 170, justifyContent: 'center', width: width }}>
                    <Text numberOfLines={2} style={{ paddingHorizontal: 15, width: width, fontWeight: '500', fontSize: 15, color: '#2ecc71' }}>React Native developer</Text>
                    <View style={{ marginLeft: 15, flexDirection: 'row', marginTop: 12 }}>
                        <Text style={{ fontWeight: '500', fontSize: 11, color: '#3d3d3d' }}>Почасовая Оплата</Text>
                        <Text style={{ fontWeight: '300', fontSize: 11, color: '#3d3d3d' }}> - 7 минут назад</Text>
                    </View>
                    <View style={{ marginLeft: 15, flexDirection: 'row', marginTop: 12 }}>
                        <View>
                            <Text style={{ fontWeight: '300', fontSize: 11, color: '#3d3d3d' }}>Уровень Знания</Text>
                            <Text style={{ fontWeight: '400', fontSize: 14, color: '#3d3d3d' }}>Intermediate</Text>
                        </View>
                        <View style={{ marginLeft: 50 }}>
                            <Text style={{ fontWeight: '300', fontSize: 11, color: '#3d3d3d' }}>Бюджет</Text>
                            <Text style={{ fontWeight: '400', fontSize: 14, color: '#3d3d3d' }}>300,000₸</Text>
                        </View>
                    </View>


                    <View style={{ paddingHorizontal: 15, flexDirection: 'row', marginTop: 12, width: width, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FAIcon name="star" size={18} color={'orange'} />
                            <Text style={{ fontWeight: '400', fontSize: 13, color: '#3d3d3d', marginLeft: 10 }}>4.85 (36)</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FAIcon name="check-circle" size={20} color={'skyblue'} />
                            <Text style={{ fontWeight: '400', fontSize: 13, color: '#3d3d3d', marginLeft: 10 }}>Платежеспособный</Text>
                        </View>
                        <TouchableOpacity>
                            <FAIcon name="heart" size={20} color={'#3d3d3d'} />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>


            </ScrollView>
        );
    }
}
export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});