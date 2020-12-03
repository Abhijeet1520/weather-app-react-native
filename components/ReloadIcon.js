import React from 'react'
import { View, Platform, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../utils/index'

export default function ReloadIcon(props) {
    const reloadIconName = Platform.OS === 'android' ? 'md-refresh' : 'ios-refresh'
    return (
        <View style={styles.reloadIcon}>
            <Ionicons onPress={props.load} name={reloadIconName} size={24} color={colors.PRIMARY_COLOR} />
        </View>
    )
}

const styles = StyleSheet.create({
    reloadIcon: {
        position: 'absolute',
        alignItems: 'flex-end',
        top: 40,
        right: 30
    }
})