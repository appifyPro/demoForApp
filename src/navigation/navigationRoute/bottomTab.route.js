import {LANDING_PAGE_NAVIGATION} from  '../../contants/navigation.constants'
import HomeScreen from '../../screens/homeScreen/HomeScreen';
import BatchScreen from '../../screens/batchScreen/BatchScreen';
import ShareScreen from '../../screens/shareScreen/ShareScreen';
import ProfileScreen from '../../screens/profileScreen/ProfileScreen';
import { ICONS } from '../../utils/icons';

export const landingPageBottomTabsRoute = [
  {
    component: HomeScreen,
    name: LANDING_PAGE_NAVIGATION.LANDING_PAGE_LOGO,
    activeIcon: ICONS.LOGOTABACTIVE,
    inActiveIcon: ICONS.LOGOTABACTIVE,
    options: {},
  },
  {
    component: BatchScreen,
    name: LANDING_PAGE_NAVIGATION.LANDING_PAGE_BATCH,
    activeIcon: ICONS.BATCHTAB,
    inActiveIcon: ICONS.BATCHTAB,
    options: {},
  },
  {
    component: HomeScreen,
    name: LANDING_PAGE_NAVIGATION.LANDING_PAGE_CENTER,
    activeIcon: ICONS.CENTERTAB,
    inActiveIcon: ICONS.CENTERTAB,
    options: {
      tabBarStyle: {
        display: 'none',
        zIndex: -20,
      },
      tabBarIconStyle: {
        backgroundColor: '#ffffff',
        padding: 35,
        borderRadius: 50,
        justifyContent: 'center',
        margintop: 15,
        borderWidth: 5,
        borderColor: 'white',
      },
    },
  },
  {
    component: ShareScreen,
    name: LANDING_PAGE_NAVIGATION.LANDING_PAGE_SHARE,
    activeIcon: ICONS.SHARETAB,
    inActiveIcon: ICONS.SHARETAB,
    options: {},
  },
  {
    component: ProfileScreen,
    name: LANDING_PAGE_NAVIGATION.LANDING_PAGE_PROFILE,
    activeIcon: ICONS.PROFILETAB,
    inActiveIcon: ICONS.PROFILETAB,
    options: {},
  },
  


];

