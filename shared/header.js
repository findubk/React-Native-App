import React from 'react';
import { StyleSheet, Text, View,Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

export default function Header({ navigation,title }) {
    const openMenu = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    }

    return (
        <ImageBackground  source={require('../assets/game_bg.png')} style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
            <View style={styles.headerContainer}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}></Image>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'        
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        left: 0
    },
    headerImage:{
        height:26,
        width:26,
        marginHorizontal:10  
    },headerContainer:{
        flexDirection:'row',
          
    }
});