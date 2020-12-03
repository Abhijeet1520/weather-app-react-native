import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../utils/index'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors

export default function WeatherDetails(props) {
    const {main: {feels_like, humidity, pressure}, wind: {speed}, } = props.currentWeather
    
    return (
        <View style={styles.weatherDetails}>
            <View style={styles.weatherDetailsRow}>
                <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR}}>
                    <View style={styles.weatherDetailsRow}>
                        <FontAwesome5 name='temperature-low' size={25} color={PRIMARY_COLOR} />
                        <View style={styles.weatherDetailsItems}>
                            <Text>Feels like :</Text>
                            <Text style={styles.textSecondary}>{feels_like}{props.unitSystem=='metric' ? '°C' : '°F'}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.weatherDetailsBox}>
                    <View style={styles.weatherDetailsRow}>
                        <MaterialCommunityIcons name='water' size={30} color={PRIMARY_COLOR} />
                        <View style={styles.weatherDetailsItems}>
                            <Text>Humidity :</Text>
                            <Text style={styles.textSecondary}>{humidity}%</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{...styles.weatherDetailsRow, borderTopWidth: 1, borderTopColor: BORDER_COLOR}}>
                <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR}}>
                    <View style={styles.weatherDetailsRow}>
                        <MaterialCommunityIcons name='weather-windy' size={25} color={PRIMARY_COLOR} />
                        <View style={styles.weatherDetailsItems}>
                            <Text>Wind Speed:</Text>
                            <Text style={styles.textSecondary}>{Math.round(speed)} {props.unitSystem=='metric' ? 'm/s' : 'miles/h'}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.weatherDetailsBox}>
                    <View style={styles.weatherDetailsRow}>
                        <MaterialCommunityIcons name='speedometer' size={30} color={PRIMARY_COLOR} />
                        <View style={styles.weatherDetailsItems}>
                            <Text>Pressure :</Text>
                            <Text style={styles.textSecondary}>{pressure} hPa</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherDetails: {
        marginTop: 'auto',
        borderWidth: 1,
        margin: 15,
        borderColor: BORDER_COLOR,
        borderRadius: 10,
    },
    weatherDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    weatherDetailsBox: {
        padding: 10,
        flexGrow: 1,
    },
    weatherDetailsItems: {
        padding: 15,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    textSecondary: {
        fontSize: 15,   
        color: SECONDARY_COLOR,
        fontWeight: '700',
        margin: 7,
    },
})