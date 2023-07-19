import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import icons from '../src/constants/icons';
import HomeScreen from '../src/screens/Home/HomeScreen';
import CardScreen from '../src/screens/Card/CardScreen';
import InvestScreen from '../src/screens/Invest/InvestScreen';
import ProfileScreen from '../src/screens/Profile/ProfileScreen';
import {Image} from 'react-native';
import {COLORS, SIZES} from '../src/constants/theme';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false, // to get off the text in the tab.
        tabBarStyle: {
          height: 50,
          // backgroundColor: 'red'
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Homek') {
            iconName = focused ? icons.eyes : icons.eyesout;
          } else if (route.name === 'Searchk') {
            iconName = focused ? icons.eyes : icons.eyesout;
          } else if (route.name === 'Reelsk') {
            iconName = focused ? icons.eyes : icons.eyesout;
          } else if (route.name === 'Activityk') {
            iconName = focused ? icons.eyes : icons.eyesout;
          } else if (route.name === 'Profilek') {
            iconName = focused ? icons.eyes : icons.eyesout;
          }
          return (
            <Image
              source={iconName}
              style={{height: SIZES.h2, width: SIZES.h2, color: COLORS.b}}
            />
          );
        },
      })}>
      <Tab.Screen name="Homek" component={HomeScreen} />
      <Tab.Screen name="Searchk" component={CardScreen} />
      <Tab.Screen name="Reelsk" component={InvestScreen} />
      <Tab.Screen name="Activityk" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
