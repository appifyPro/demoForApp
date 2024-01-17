import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';
import DotIconText from '../dotIcon/DotIconText';
import {COLORS} from '../../contants/colors.constants';
import {ICONS} from '../../utils/icons';
import SettingIcon from '../settingIcon/SettingIcon';

const data = [
  {
    key: '1',
    ShopName: 'Shop Name',
    serviceName:'Our Services',
    Hannover:'Hannover',
    imageSource: require('../../../assets/images/services.png'),
    heartIcon:ICONS.HEARTICON,
    settingIcon:ICONS.SETTING
  },

  {
    key: '2',
    ShopName: 'Shop Name',
    serviceName:'Our Services',
    Hannover:'Hannover',
    imageSource: require('../../../assets/images/services.png'),
    heartIcon:ICONS.HEARTICON,
    settingIcon:ICONS.SETTING
  },

];

const renderItem = ({item}) => (
  <View style={styles.marketContainer}>
    <View>
      <ImageBackground
        resizeMode="cover"
        source={item.imageSource}
        style={styles.mainimg}>
        <View style={{alignSelf: 'flex-end', marginTop: 7, marginRight: 8}}>
          <ICONS.HEARTICON />
        </View>
      </ImageBackground>
    </View>
    <View style={{paddingVertical:6,paddingHorizontal:10,gap:3}}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
    <SettingIcon/>
    <DotIconText dotText={item.serviceName} isDot={true} style={{color:COLORS.darkBlack,fontSize:10,fontWeight:'500'}} />
    </View>
    <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
      <SettingIcon/>
      <DotIconText dotText={item.Hannover} style={{color:COLORS.primaryMedium,fontSize:10,fontWeight:'400'}} isDot={true} />
      <SettingIcon/>
      <DotIconText dotText={item.Hannover} style={{color:COLORS.primaryMedium,fontSize:10,fontWeight:'400'}} isDot={true} />
    </View>
    <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
    <SettingIcon/>
      <DotIconText dotText={item.Hannover} style={{color:COLORS.primaryMedium,fontSize:10,fontWeight:'400'}} isDot={true} />
      <SettingIcon/>
      <DotIconText dotText={item.Hannover} style={{color:COLORS.primaryMedium,fontSize:10,fontWeight:'400'}} isDot={true} />
    </View>
    </View>


  </View>
);

export default function ServicesCard({dotText}) {
  return (
    <View style={styles.cardContainer}>
      <View>
        <DotIconText
          dotText={dotText}
          style={{fontSize: 14, color: COLORS.darkGray, fontWeight: '400'}}
          isDot={true}
        />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  marketImage: {
    // width: '100%', // Adjust the width as needed
    height: 80, // Adjust the height as needed
    resizeMode: 'cover',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: 'hidden',
  },
  mainimg: {
    width: "auto",
    height: 100,
    resizeMode: 'cover',
  },
  cardContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingBottom: 16, // Adjust the padding as needed
    backgroundColor: '#fff', // Set the background color to match your design
    borderRadius: 5, // Adjust the borderRadius as needed
    marginHorizontal: 7,
    marginTop: 6,
    paddingHorizontal: 16,
    paddingTop: 7,
  },
  marketContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#F2F2F2', // Set the background color to match your design
    borderRadius: 5, // Adjust the borderRadius as needed
    marginHorizontal: 7,
    marginTop: 6,
    paddingBottom:5
    // maxWidth:115
  },
  horizontal: {
    height: 2,
    borderRadius: 2,
    backgroundColor: 'rgba(11, 14, 45, 0.10)',
    width: 102,
    marginLeft: 4,
  },
  price: {color: COLORS.primary, fontSize: 10, fontWeight: '600', padding: 4},
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
  },
  Title: {color: COLORS.darkBlack, fontSize: 9, fontWeight: '600', padding: 4},
});
