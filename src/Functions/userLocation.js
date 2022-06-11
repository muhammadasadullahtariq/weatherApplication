import RNLocation from 'react-native-location';
import Geolocation from 'react-native-geolocation-service';

import weaterFuntion from './weatherData';
var location;
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
        location = {...position};
        // console.log(
        //   weaterFuntion(position.coords.longitude, position.coords.latitude),
        // );
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
        location = {...position};
        // console.log(
        //   weaterFuntion(position.coords.longitude, position.coords.latitude),
        // );
        console.log(position);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }
  console.log(location, ' hi');

  //weaterFuntion);
}

export default getLocation;
