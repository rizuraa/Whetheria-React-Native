import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Text, ScrollView} from 'react-native';
import axios from 'axios';
import FastImage from 'react-native-fast-image';

const placeholder = require('./src/placeholder.png');

const Air = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImageUrl();
  }, []);

  const fetchImageUrl = () => {
    axios
      .get('http://20.11.17.38/api/gambar')
      .then(response => {
        setImageUrl(response.data.imageUrl);
        setLoading(false);
      })
      .catch(error => {
        console.error('Terjadi kesalahan saat mengambil URL gambar:', error);
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ScrollView>
          <Text style={styles.title}>Prakiraan Sebaran Angin</Text>
          <View style={styles.imgWrapper}>
            {loading ? (
              <View style={styles.placeholder} />
            ) : (
              <FastImage
                source={{uri: imageUrl}}
                style={styles.image}
                resizeMode={FastImage.resizeMode.cover}
              />
            )}
          </View>
          <View style={styles.descWrapper}>
            <Text style={styles.desc}>NOTE</Text>
            <Text style={styles.desc}>
              Informasi di atas menampilkan arah angin yang terjadi di
              Indonesia. Terdapat garis berwarna ungu yang memiliki panah yang
              mewakili arah dari angin.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#9BCDD2',
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 13,
    paddingVertical: 12,
    textAlign: 'center',
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
  imgWrapper: {
    alignItems: 'center',
    alignContent: 'center',
    // paddingVertical: 40,
    // marginHorizontal: 30,
  },
  image: {
    width: 300,
    height: 300,
  },
  placeholder: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    backgroundColor: '#D3D3D3',
  },
  descWrapper: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 15,
    width: 330,
  },
  desc: {
    color: '#000000',
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
  },
  card: {
    backgroundColor: '#FAF0E4',
    marginHorizontal: 20,
    marginVertical: 25,
    paddingBottom: 20,
    borderRadius: 20,
    elevation: 20,
  },
});

export default Air;
