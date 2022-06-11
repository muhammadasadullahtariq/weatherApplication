import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import rainy from '../Asserts/rainy.png';
import snow from '../Asserts/snow.png';
import sunny from '../Asserts/snow.png';
import thunder from '../Asserts/thunder.png';
import thunderAndRainy from '../Asserts/thunderAndRainy.png';
import wind from '../Asserts/wind.png';
import HeaderText from '../Components/headerText';
import NormalText from '../Components/normalText';

const screen = props => {
  useEffect(() => {}, []);

  return (
    <View style={styles.mainContainer}>
      <Image style={styles.imageContainer} source={props.dailyStatus.imag} />
      <View
        style={{
          height: '100%',
          width: '40%',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          marginLeft: 10,
        }}>
        <NormalText text={props.dailyStatus.day} viewStyle={{marginTop: 20}} />
        <HeaderText
          text={props.dailyStatus.statu}
          viewStyle={{marginBottom: 20}}
          componentStyle={{marginVertical: 0}}
        />
      </View>
      <HeaderText
        text={Math.floor(props.dailyStatus.tem) + 'F'}
        viewStyle={{
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',

          width: '30%',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 100,
    flexDirection: 'row',
    width: '100%',
    alignContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#99b3e1',
  },
  imageContainer: {
    height: '100%',
    width: '30%',
    aspectRatio: 1.4,
    alignSelf: 'center',
  },
});

export default screen;
