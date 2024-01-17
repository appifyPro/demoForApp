import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles/NavigationStyles';
import StackNavigation from './StackNavigation';

export default function RootNavigation() {



  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <StackNavigation />
      </SafeAreaView>
    </React.Fragment>
  );
}
