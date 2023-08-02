import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Wave = () => {
  const [data, setData] = useState([]);
  const [showAccordion, setShowAccordion] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWaveData();
  }, []);

  const fetchWaveData = () => {
    const url =
      'https://peta-maritim.bmkg.go.id/public_api/perairan/F.11_Perairan%20Indramayu%20-%20Cirebon.json';
    axios
      .get(url)
      .then(response => {
        setData(response.data.data);
        setLoading(false);
        console.log(response);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };

  const toggleAccordion = item => {
    setSelectedData(item);
    setShowAccordion(!showAccordion);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Prakiraan Gelombang Laut</Text>
        {loading ? (
          <View style={styles.loadingContainer}>
            <View style={styles.skeletonWaveDate} />
            <View style={styles.skeletonAccordion} />
            <View style={styles.skeletonAccordion} />
            <View style={styles.skeletonAccordion} />
          </View>
        ) : (
          data.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.list}
                onPress={() => toggleAccordion(item)}>
                <View>
                  <Text style={styles.waveDate}>{item.time_desc}</Text>
                </View>
                {showAccordion && selectedData.time_desc === item.time_desc && (
                  <View style={styles.accordion}>
                    <Text style={styles.accordionContent}>
                      Gelombang Laut : {item.wave_cat}
                    </Text>
                    <Text style={styles.accordionContent}>
                      Tinggi Gelombang : {item.wave_desc}
                    </Text>
                    <Text style={styles.accordionContent}>
                      Keadaan Gelombang : {item.weather_desc}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })
        )}
      </View>
    </View>
  );
};

export default Wave;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  list: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    marginHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 15,
  },
  waveDate: {
    fontSize: 14,
    color: '#000000',
  },
  accordion: {
    // paddingHorizontal: 20,
    // paddingVertical: 10,
  },
  accordionContent: {
    fontSize: 12,
    color: '#666666',
    marginVertical: 5,
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
  loadingContainer: {
    marginTop: 12,
    paddingHorizontal: 20,
  },
  skeletonWaveDate: {
    width: 150,
    height: 20,
    backgroundColor: '#D3D3D3',
    marginBottom: 10,
    borderRadius: 5,
  },
  skeletonAccordion: {
    width: 200,
    height: 12,
    backgroundColor: '#D3D3D3',
    marginBottom: 5,
    borderRadius: 5,
  },
});
