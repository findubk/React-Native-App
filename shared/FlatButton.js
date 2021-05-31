import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const FlatButton = ({text,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.Button}>
            <Text style={styles.ButtonText}>{text}</Text>
        </View>
        </TouchableOpacity>
    )
}

export default FlatButton

const styles = StyleSheet.create({
    Button:{
        borderRadius:8,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:'#f01d71'
    },ButtonText:{
        color:'white',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:16,
        textAlign:'center'
    }
})
