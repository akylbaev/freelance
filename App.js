import React from 'react';
import { AsyncStorage } from "react-native";
import Routes from './src/routes/Routes';

// const cities = [{ name: "Astana", id: 1 }, { name: "Almaty", id: 2 }, { name: "Aktau", id: 3 }, { name: "Aktobe", id: 4 }, { name: "Aksai", id: 5 }, { name: "Aksu", id: 6 }, { name: "Atyrau", id: 7 }, { name: "Semey", id: 8 }, { name: "Zhanaozen", id: 9 }, { name: "Karaganda", id: 10 }, { name: "Kokshetau", id: 11 }, { name: "Kostanai", id: 24 }, { name: "Kyzylorda", id: 12 }, { name: "Pavlodar", id: 13 }, { name: "Petropavlovsk", id: 14 }, { name: "Stepnogorsk", id: 15 }, { name: "Taldykorgan", id: 16 }, { name: "Taraz", id: 17 }, { name: "Temirtau", id: 18 }, { name: "Uralsk", id: 19 }, { name: "Shu", id: 20 }, { name: "Шымкент", id: 21 }, { name: "Shuchinsk", id: 22 }, { name: "Ekibastuz", id: 23 }]

export default class App extends React.Component {


  // async componentDidMount() {
  //   await this.getCityName()
    // try {
    //   let response = await fetch('https://geoip-db.com/json/');
    //   // let result = response._bodyText.json();

    //   console.error("RESULT", response._bodyText);
    // }
    // catch (error) {
    //   console.error('GET ERROR', error)
    // }
    // fetch('https://geoip-db.com/json/')
    //   .then((response) => response.json())
    //   .then( (responseJson) => {

    //     console.error(responseJson)

    //     // try {
    //     //   let cityObj = cities.filter(c => c.name === responseJson.city);
    //     //   // console.error(responseJson, cityObj)
    //     //   await AsyncStorage.setItem('city_id', cityObj[0].toString());
    //     //   console.warn(cityObj)
    //     // } catch (error) {
    //     //   // Error saving data
    //     //   console.warn('ERROR', error)
    //     // }

    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  // }

  // getCityName() {
  //   return fetch('https://geoip-db.com/json/')
  //     .then((response) => response.json())
  //     .then(async (responseJson) => {

  //       // console.error(responseJson)

  //       try {
  //         let cityObj = cities.filter(c => c.name === responseJson.city);
  //         // console.error(responseJson, cityObj)
  //         await AsyncStorage.setItem('city_id', cityObj[0].id.toString());
  //       } catch (error) {
  //         // Error saving data
  //         console.warn(error)
  //       }

  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }





  render() {
    return (
      <Routes />
    );
  }
}

