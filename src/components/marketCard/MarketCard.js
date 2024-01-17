import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import DotIconText from '../dotIcon/DotIconText';
import { COLORS } from '../../contants/colors.constants';
import { ICONS } from '../../utils/icons';


const data = [
    {
      key: '1',
      title: 'Toobox Like New',
      imageSource: require('../../../assets/images/marketImg.png'),
      price: 150,
      currency: '$',
      dotText: 'Our Market',
      dotIcon: ICONS.MARKETICON, // Provide your dot icon here
    },
    {
        key: '2',
        title: 'Toobox Like New',
        imageSource: require('../../../assets/images/marketImg.png'),
        price: 150,
        currency: '$',
        dotText: 'Our Market',
        dotIcon: ICONS.MARKETICON, // Provide your dot icon here
      },
      {
        key: '3',
        title: 'Toobox Like New',
        imageSource: require('../../../assets/images/marketImg.png'),
        price: 150,
        currency: '$',
        dotText: 'Our Market',
        dotIcon: ICONS.MARKETICON, // Provide your dot icon here
      },
  ];

const renderItem = ({ item }) => (
    <View style={styles.marketContainer}>
      <Image source={item.imageSource} alt="Market Image" style={styles.marketImage} />
      <Text style={styles.Title}>{item.title}</Text>
      <View style={styles.horizontal} />
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{`${item.currency} ${item.price} - FP`}</Text>
        <DotIconText DotIcon={item.dotIcon} isDot={true}/>
      </View>
    </View>
  );

export default function MarketCard({dotText }) {
  return (
    <View style={styles.cardContainer}>
      <View>
        <DotIconText dotText={dotText} isDot={true} style={{ fontSize: 14, color: COLORS.lightGray, fontWeight: '400' }} />
      </View>
       <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
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
    overflow:'hidden'

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
    marginHorizontal:7,
    marginTop:6,
    paddingHorizontal:16,
    paddingTop:7,
  },
  marketContainer:{
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
    marginHorizontal:7,
    marginTop:6,
    maxWidth:115

  },
  horizontal:{
      height:2,
      borderRadius: 2,
      backgroundColor: 'rgba(11, 14, 45, 0.10)',
      width:102,
      marginLeft:4
  },
  price:{ color: COLORS.primary, fontSize: 10, fontWeight: '600', padding: 4 },
  priceContainer:{ flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 2 },
  Title:{ color: COLORS.darkBlack, fontSize: 9, fontWeight: '600', padding: 4 }
});
