import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
import Weather from '../Screens/Weather';
import Rainfall from '../Screens/Rainfall';
import Air from '../Screens/Air';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Wave from '../Screens/Wave';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      initialRouteName="Weather"
      screenOptions={({route}) => ({
        tabBarStyle: [
          {
            display: 'flex',
            height: 70,
          },
          null,
        ],
        tabBarLabelStyle: {
          fontSize: 15,
          fontFamily: 'Poppins-Reguler',
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === 'Cuaca') {
            iconName = focused ? 'day-cloudy' : 'day-cloudy';
          } else if (rn === 'CurahHujan') {
            iconName = focused ? 'day-rain' : 'day-rain';
          } else if (rn === 'Gelombang') {
            iconName = focused ? 'wind' : 'wind';
          } else if (rn === 'Angin') {
            iconName = focused ? 'cloudy-gusts' : 'cloudy-gusts';
          }

          return <Fontisto name={iconName} size={size} color={color} />;
        },
        // tabBarActiveTintColor: 'tomato',
        // tabBarInactiveTintColor: 'gray',
      })}
      // tabBarStyle={{height: 100}} // Set the height of the tab bar
    >
      <Tab.Screen
        name="Cuaca"
        component={Weather}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="CurahHujan"
        component={Rainfall}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Gelombang"
        component={Wave}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Angin" component={Air} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
