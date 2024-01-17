import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '../contants/navigation.constants';
import { stackNavigationRoute } from './navigationRoute/stackNavigation.route';

const Stack = createNativeStackNavigator();

const StackNavigation = ({ user }) => {
  const defaultOptions = {
    gestureEnabled: false,
    gestureDirection: 'horizontal',
    headerShown: false,
  };

  return (
    <Stack.Navigator initialRouteName={NAVIGATION.BOTTOM_NAVIGATION}>
      {stackNavigationRoute.map((item, index) => {
        console.log("item",item)
        const { name, component, options, ...rest } = item;
        return (
          <Stack.Screen
            key={index}
            name={name}
            component={component}
            options={{ ...defaultOptions, ...options }}
            {...rest}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default StackNavigation;
