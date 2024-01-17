import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {styles} from '../styles/NavigationStyles';
import {landingPageBottomTabsRoute} from '../navigationRoute/bottomTab.route'
const Tab = createBottomTabNavigator();

const LandingPageBottomNavigation = () => {
  const defaultOptions = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    headerShown: false,
  };

  const getTabBarIcon = (focused, ActiveIcon, InActiveIcon) =>
    focused ? <ActiveIcon /> : <InActiveIcon />;

  const getTabBarLabel = (focused, title) => (
    <Text style={focused ? styles.activeTabTxt : styles.inactiveTabTxt}>
      {/* {title} */}
    </Text>
  );

  return (
    <Tab.Navigator>
      {landingPageBottomTabsRoute.map((item, index) => {
        const {
          name,
          activeIcon,
          inActiveIcon,
          options,
          title = '',
          component,
          ...rest
        } = item;
        return (
          <Tab.Screen
            key={index}
            name={name}
            component={component}
            options={{
              ...defaultOptions,
              ...options,
              tabBarIcon: ({focused}) =>
                getTabBarIcon(focused, activeIcon, inActiveIcon),
              tabBarLabel: ({focused}) =>
                getTabBarLabel(focused, title || name),
            }}
            {...rest}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default LandingPageBottomNavigation;
