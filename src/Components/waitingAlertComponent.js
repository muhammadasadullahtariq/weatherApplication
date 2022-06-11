import React from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import Text from './normalText';

const screen = props => {
  return (
    <Modal visible={props.visible} transparent={true} style={{height: 3}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#00000080',
        }}>
        <View
          style={{
            width: '80%',
            backgroundColor: 'white',
            marginBottom: '10%',
            borderRadius: 10,
          }}>
          <View style={{flexDirection: 'row', padding: 10}}>
            <ActivityIndicator size="large" color="#1692ff" />
            <Text
              text={'Please wait'}
              componentStyle={{marginLeft: 20, fontSize: 25}}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
  textContainer: {fontSize: 20, padding: 10},
});

export default screen;
