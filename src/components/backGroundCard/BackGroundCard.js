import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../contants/colors.constants';
import DotIconText from '../dotIcon/DotIconText';
import { ICONS } from '../../utils/icons';

const BackGroundCard = ({ imageSource, title, dotText,dinnerImgStyle,contentStyle }) => {


  return (
    <View>
      <ImageBackground
        resizeMode="cover"
        source={imageSource}
        style={[styles.mainimg,dinnerImgStyle]}
      >
        <View
          style={{
            marginHorizontal: 10,
          }}
        >
          <View style={{ alignSelf: 'flex-end', marginTop: 7, marginRight: 8 }}>
            <ICONS.ALEXANDER />
          </View>
          <View style={[styles.contentParent,contentStyle]}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontWeight: '600',
              }}
            >
              {title}
            </Text>
            <DotIconText
              dotText={dotText}
              isDot={true}
              styleDot={{ backgroundColor: COLORS.white }}
              style={{
                color: 'white',
                fontSize: 10,
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default BackGroundCard;

const styles = StyleSheet.create({
  mainimg: {
    width: 361,
    height: 234,
    // Add additional styles for the ImageBackground if needed
    backgroundColor:'red'
  },
  contentParent:{
    marginTop:150
  }
});
