import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import WeatherList from '../Components/WeatherList';
// import icon1 from '../Assets/Icon/1.png';

const Weather = ({navigation}) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = () => {
    fetch('https://ibnux.github.io/BMKG-importer/cuaca/501221.json')
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };

  const getWeatherImage = kodeCuaca => {
    if (kodeCuaca === '0') {
      return require('../Assets/Icon/0.png');
    } else if (kodeCuaca === '1') {
      return require('../Assets/Icon/1.png');
    } else if (kodeCuaca === '2') {
      return require('../Assets/Icon/2.png');
    } else if (kodeCuaca === '3') {
      return require('../Assets/Icon/3.png');
    } else if (kodeCuaca === '4') {
      return require('../Assets/Icon/4.png');
    } else if (kodeCuaca === '5') {
      return require('../Assets/Icon/5.png');
    } else if (kodeCuaca === '10') {
      return require('../Assets/Icon/10.png');
    } else if (kodeCuaca === '45') {
      return require('../Assets/Icon/45.png');
    } else if (kodeCuaca === '60') {
      return require('../Assets/Icon/60.png');
    } else if (kodeCuaca === '61') {
      return require('../Assets/Icon/61.png');
    } else if (kodeCuaca === '63') {
      return require('../Assets/Icon/63.png');
    } else if (kodeCuaca === '80') {
      return require('../Assets/Icon/80.png');
    } else if (kodeCuaca === '95') {
      return require('../Assets/Icon/95.png');
    } else if (kodeCuaca === '97') {
      return require('../Assets/Icon/97.png');
    } else if (kodeCuaca === '100') {
      return require('../Assets/Icon/100.png');
    } else if (kodeCuaca === '101') {
      return require('../Assets/Icon/101.png');
    } else if (kodeCuaca === '102') {
      return require('../Assets/Icon/102.png');
    } else if (kodeCuaca === '103') {
      return require('../Assets/Icon/103.png');
    } else if (kodeCuaca === '104') {
      return require('../Assets/Icon/104.png');
    } else {
      return require('../Assets/Icon/0.png');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ScrollView>
          <View>
            <Text style={styles.title}>Prakiraan Cuaca</Text>
          </View>
          {loading ? (
            <View style={styles.loadingContainer}>
              <View style={styles.skeletonWeather} />
              <View style={styles.skeletonWeather} />
              <View style={styles.skeletonWeather} />
            </View>
          ) : (
            weatherData &&
            weatherData.map((item, index) => {
              return (
                <View style={styles.contentWrap} key={index}>
                  <WeatherList
                    temprature={item.jamCuaca.substring(11, 16)}
                    date={item.cuaca}
                    weather={item.tempC}
                    icon={getWeatherImage(item.kodeCuaca)}
                  />
                </View>
              );
            })
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default Weather;

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
    marginTop: 8,
    fontFamily: 'Poppins-Regular',
  },
  contentWrap: {
    marginTop: 12,
    paddingHorizontal: 20,
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
  skeletonWeather: {
    width: 150,
    height: 20,
    backgroundColor: '#D3D3D3',
    marginBottom: 10,
    borderRadius: 5,
  },
});
