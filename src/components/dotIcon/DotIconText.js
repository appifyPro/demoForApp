import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../contants/colors.constants';

const DotIconText = ({ dotText, DotIcon,style,isDot,styleDot  }) => {
  return (
    <View style={styles.container}>
     {isDot && <View style={[styles.dot,styleDot]} />}
      {DotIcon && <DotIcon  />} 
      {dotText &&<Text style={[styles.centerText,style]}>{dotText}</Text>}
      {isDot &&<View style={[styles.dot,styleDot]} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.lightGray,
    marginHorizontal: 4,
  },
  centerText:{
    fontSize:10,color:COLORS.lightGray,fontWeight:"400"
  }
});

export default DotIconText;
