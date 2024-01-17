import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ICONS } from '../../utils/icons'
import { COLORS } from '../../contants/colors.constants'

const SettingIcon = () => {
  return (
    <View style={styles.container}>
 {<View style={[styles.dot]} />}
    <ICONS.SETTING/>
    </View>
  )
}

export default SettingIcon

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
})