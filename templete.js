import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

const screen = props => {
  useEffect(() => {}, []);

  return <View style={styles.mainContainer}></View>;
};

const styles = StyleSheet.create({
  mainContainer: {
    imageContainer: {
      height: '100%',
      width: '100%',
      aspectRatio: 1.4,
      alignSelf: 'center',
    },
  },
});

export default screen;
