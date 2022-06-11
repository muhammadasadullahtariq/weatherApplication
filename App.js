/**
 open terminal in folder
 run command npm i 
 it will install all the packages 
 than run 
 npx react-native run-android
 it will start your application on android device
 */

import React, {useState, useEffect} from 'react';

import RNLocation from 'react-native-location';
import Geolocation from 'react-native-geolocation-service'; //this package is use to get location of user
import FlatlistItem from './src/Components/flatListItem'; //it show the item in Flatlist or you can say flatlist item design
import {FlatList, View} from 'react-native';
import setArray from './src/Functions/SetArray'; //it parse and get the usefull data
import WaitingAlert from './src/Components/waitingAlertComponent'; //the alter that shown on screen and say please wait
const App = () => {
  const [dataArr, setDataArr] = useState([]);
  const [alertFlag, setAlert] = useState(true);
  //function that get the user current location
  //it firest ask for permission and than get the location
  async function getLocation() {
    permission = await RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
        rationale: {
          title: 'We need to access your location',
          message: 'We use your location to show where you are on the map',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      },
    });
    console.log('permission', permission);
    if (!permission) {
      permission = await RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {
          detail: 'coarse',
          rationale: {
            title: 'We need to access your location',
            message: 'We use your location to show where you are on the map',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          },
        },
      });
      console.log(permission);
      Geolocation.getCurrentPosition(
        position => {
          console.log(
            getWeaterData(position.coords.longitude, position.coords.latitude),
          );
          console.log(position);
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } else {
      console.log('Here 7');
      Geolocation.getCurrentPosition(
        position => {
          console.log(
            getWeaterData(position.coords.longitude, position.coords.latitude),
          );
          console.log(position);
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  }

  //funtion that get the weather data from API
  //after fetching the data it call the SetArray funtion to filter the data
  const getWeaterData = async (long, lati) => {
    var day = new Date();
    console.error(day.getDay());
    console.log('long', long);
    console.log('long', lati);
    try {
      const response = await fetch(
        'https://api.openweathermap.org/data/2.5/onecall?lat=' +
          lati +
          '&lon=' +
          long +
          '&exclude=current%2Cminutely%2Chourly%2Calert&appid=e51d26c87446d7ff7a35f279f7dc414d',
        {
          method: 'GET',
          headers: {
            'cache-control': 'no-cache',
          },
        },
      )
        .then(response => response.json())
        .then(data => {
          setDataArr(setArray(data));
          setAlert(false);
        })
        .catch(err => console.error(err));
      console.error(response);
      console.log('g g ');
    } catch (error) {
      console.log('asad', error);
      return 'Media not found';
    }
  };

  useEffect(() => {
    if (alertFlag) getLocation();
  });

  //it the design of whole screen
  return (
    <View>
      <WaitingAlert visible={alertFlag} />
      <FlatList
        data={dataArr}
        renderItem={items => <FlatlistItem dailyStatus={items.item} />}
      />
    </View>
  );
};

export default App;
