import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.wrap}>
      <View>
        <Image style={styles.img} source={require('../Assets/Logo/logo.png')} />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 160,
  },
});
