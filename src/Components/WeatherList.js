import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

// const WeatherList = props => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.innerContent}>
//         <View style={styles.column}>
//           <Text style={styles.text}>{props.temprature}</Text>
//           <Text style={styles.text}>{props.date}</Text>
//           <Text style={styles.text}>{props.weather} C</Text>
//           <Text style={styles.text}>{props.data}</Text>
//         </View>
//         <View style={styles.column}>
//           <Image source={props.icon} style={styles.weatherImage} />
//         </View>
//       </View>
//     </View>
//   );
// };

const WeatherList = props => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContent}>
        <View style={styles.column}>
          <Text style={styles.text}>{props.temprature}</Text>
          <Text style={styles.text}>{props.date}</Text>
          <Text style={styles.text}>{props.weather} C</Text>
          <Text style={styles.text}>{props.data}</Text>
        </View>
        <View style={styles.column} />
        <View style={styles.column}>
          <Image source={props.icon} style={styles.weatherImage} />
        </View>
      </View>
    </View>
  );
};

export default WeatherList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
  },
  innerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  column: {
    flex: 1,
  },
  text: {
    fontFamily: 'Poppins-Regular',
  },
  weatherImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginRight: 12,
    marginTop: 10,
  },
  innerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
});
