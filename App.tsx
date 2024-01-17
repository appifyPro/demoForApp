import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigation from './src/navigation/RootNavigation';
import { COLORS } from './src/contants/colors.constants';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <React.Fragment>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </React.Fragment>
  );
};

export default App;
