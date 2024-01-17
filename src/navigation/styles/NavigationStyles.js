import {StyleSheet} from 'react-native';
import { COLORS } from '../../contants/colors.constants';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  activeTabTxt: {
    fontSize: 10,
    color: COLORS.primary,
  },
  inactiveTabTxt: {
    fontSize: 10,
    color: COLORS.dark[300],
  },
});
