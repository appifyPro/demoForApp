import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import DotIconText from '../dotIcon/DotIconText';
import {COLORS} from '../../contants/colors.constants';
import {ICONS} from '../../utils/icons';
import BackGroundCard from '../backGroundCard/BackGroundCard';
export default function FanCard({
  fanPageName,
  isAdmin,
  isAdminImage,
  isAdminIcon,
  isHeroImage,
  fanIcon,
  emojis,
  repostCount,
  viewersCount,
  commentsCount,
  shareCount,
  isBackgroundCardAlexander,
  isPostingBar,
  isBackgroundCardDinner,
  isCommentedBar,
}) {
  return (
    <View style={styles.cardContainer}>
      <View style={{flexDirection: 'row', gap: 5}}>
        {isAdminImage && (
          <Image
            source={require('../../../assets/images/fan.png')}
            width={25}
            height={25}
            borderRadius={2}
            alt="Fans profiles"
          />
        )}
        <View>
          {fanPageName && <Text style={styles.fanPageName}>{fanPageName}</Text>}
          {isAdmin && <DotIconText dotText="Admin" isDot={true} />}
        </View>
        <View>
          {isAdminIcon && <DotIconText isDot={true} DotIcon={fanIcon} />}
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 4}}>
        {isHeroImage && (
          <Image
            source={require('../../../assets/images/heroImg.png')}
            alt="Fans profiles"
          />
        )}
        {isBackgroundCardAlexander && (
          <BackGroundCard
            imageSource={require('../../../assets/images/Alexander.png')}
            title="The great Alexander"
            dotText="Date and Time"
          />
        )}
        {isBackgroundCardDinner && (
          <BackGroundCard
            imageSource={require('../../../assets/images/dinner.png')}
            title="The great Alexander"
            dotText="Date and Time"
            dinnerImgStyle={{height: 171}}
            contentStyle={{marginTop: 85}}
          />
        )}
        {isPostingBar && (
          <View style={{flexDirection: 'row', gap: 40, marginTop: 14}}>
            <View style={{flexDirection: 'row'}}>
              {emojis.map((emoji, index) => (
                <React.Fragment key={index}>{emoji}</React.Fragment>
              ))}
            </View>
            <View style={{flexDirection: 'row', gap: 2, alignItems: 'center'}}>
              <ICONS.REPOST />
              <Text style={styles.countText}>{repostCount}</Text>
              <View style={styles.dot} />
              <ICONS.VIEWER />
              <Text style={styles.countText}>{viewersCount}</Text>
              <View style={styles.dot} />
              <ICONS.COMMENT />
              <Text style={styles.countText}>{commentsCount}</Text>
              <View style={styles.dot} />
              <ICONS.SHARE />
              <Text style={styles.countText}>{shareCount}</Text>
            </View>
          </View>
        )}
        {isCommentedBar && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 6,
            }}>
            <ICONS.LIKEICON />
            <ICONS.HAHA />
            <ICONS.DISLIKE />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 16, // Adjust the padding as needed
    backgroundColor: '#fff', // Set the background color to match your design
    borderRadius: 5, // Adjust the borderRadius as needed
    marginHorizontal: 7,
    marginTop: 6,
  },
  fanPageName: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '600',
  },
  countText: {
    color: COLORS.lightGray,
    fontSize: 14,
    fontWeight: '400',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.40)',
    marginHorizontal: 4,
  },
});
