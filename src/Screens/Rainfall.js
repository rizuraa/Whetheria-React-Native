import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';

const Rainfall = () => {
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://20.11.17.38/api/hujan');
        setImageData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ScrollView>
          <Text style={styles.title}>Prakiraan Sebaran Hujan</Text>
          <View>
            {loading ? (
              <View style={styles.loadingContainer}>
                <View style={styles.skeletonImage} />
                <View style={styles.skeletonText} />
                <View style={styles.skeletonDesc} />
                <View style={styles.skeletonList} />
                <View style={styles.skeletonList} />
                <View style={styles.skeletonList} />
              </View>
            ) : (
              <View style={styles.imageContainer}>
                <Image
                  source={{uri: imageData.imageUrl}}
                  style={styles.image}
                />
                <Text style={styles.keterangan}>{imageData.keterangan}</Text>
                <View style={styles.descWrapper}>
                  <Text style={styles.subheading}>Potensi Hujan Lebat :</Text>
                  <View style={styles.listContainer}>
                    {imageData.potensiHujan.map((item, index) => (
                      <Text key={index} style={styles.listItem}>
                        {item}
                      </Text>
                    ))}
                  </View>
                </View>
              </View>
            )}
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
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
  keterangan: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
  },
  listContainer: {
    marginLeft: 20,
  },
  listItem: {
    color: '#000000',
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
  },
  descWrapper: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    marginHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 15,
    width: 330,
  },
  card: {
    backgroundColor: '#FAF0E4',
    marginHorizontal: 20,
    marginVertical: 25,
    paddingBottom: 20,
    borderRadius: 20,
    elevation: 20,
  },
  loadingContainer: {
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  skeletonImage: {
    width: 300,
    height: 300,
    backgroundColor: '#D3D3D3',
    marginBottom: 10,
    borderRadius: 10,
  },
  skeletonText: {
    width: 150,
    height: 20,
    backgroundColor: '#D3D3D3',
    marginBottom: 10,
    borderRadius: 5,
  },
  skeletonDesc: {
    width: 330,
    height: 100,
    backgroundColor: '#D3D3D3',
    marginBottom: 10,
    borderRadius: 15,
  },
  skeletonList: {
    width: 200,
    height: 20,
    backgroundColor: '#D3D3D3',
    marginBottom: 5,
    borderRadius: 5,
  },
});

export default Rainfall;
