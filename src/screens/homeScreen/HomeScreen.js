import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FanCard from '../../components/fanCard/FanCard';
import {ICONS} from '../../utils/icons';
import MarketCard from '../../components/marketCard/MarketCard';
import ServicesCard from '../../components/servicesCard/ServicesCard';
import HotDealCard from '../../components/hotDealCard/HotDealCard';

const HomeScreen = () => {
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <FanCard
          fanPageName="FanPage"
          isAdmin={true}
          fanIcon={ICONS.FANICON}
          emojis={[ICONS.EMOJI1(), ICONS.EMOJI2(), ICONS.EMOJI3()]}
          repostCount={'12K'}
          viewersCount={'1225'}
          commentsCount={'123'}
          shareCount={'1.1M'}
          isAdminImage={true}
          isAdminIcon={true}
          isHeroImage={true}
          isPostingBar={true}
        />
        <MarketCard
          dotText="Our Market"
        />
         <FanCard
          isBackgroundCardAlexander={true}
          emojis={[ICONS.EMOJI1(), ICONS.EMOJI2(), ICONS.EMOJI3()]}
          repostCount={'12K'}
          viewersCount={'1225'}
          commentsCount={'123'}
          shareCount={'1.1M'}
          isPostingBar={true}
        />
        <ServicesCard dotText="Services"/>
        <FanCard
          isBackgroundCardDinner={true}
          isCommentedBar={true}
        />
        <HotDealCard dotText="Hot deals"/>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
