import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import icons from '../src/constants/icons';
import HomeScreen from '../src/screens/Home/HomeScreen';
import CardScreen from '../src/screens/Card/CardScreen';
import InvestScreen from '../src/screens/Invest/InvestScreen';
import ProfileScreen from '../src/screens/Profile/ProfileScreen';
import {Image} from 'react-native';
import {COLORS, SIZES} from '../src/constants/theme';
import PaymentScreen from '../src/screens/Payments/PaymentScreen';
import BudgetScreen from '../src/screens/Budget/BudgetScreen';
import MoreScreen from '../src/screens/More/MoreScreen';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        // tabBarShowLabel: false, // to get off the text in the tab.
        tabBarStyle: {
          height: 60,
          // backgroundColor: 'red'
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = icons.icon8home;
          } else if (route.name === 'Payment') {
            iconName = icons.icon8emailsend;
          } else if (route.name === 'Invest') {
            iconName = icons.icon8clock;
          } else if (route.name === 'Card') {
            iconName = icons.icon8creditcard;
          } else if (route.name === 'More') {
            iconName = icons.icon8circledmenu;
          }
          return (
            <Image
              source={iconName}
              style={{
                height: SIZES.h1 / 1.2,
                width: SIZES.h1 / 1.2,
                tintColor: focused ? COLORS.purple : COLORS.black,
              }}
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Payment" component={PaymentScreen} />
      <Tab.Screen name="Invest" component={BudgetScreen} />
      <Tab.Screen name="Card" component={CardScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
