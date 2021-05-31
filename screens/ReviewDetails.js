import React from 'react'
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import Card from '../shared/Card';
import { globalStyles,images } from '../styles/global';

function ReviewDetails({route,navigation}) {
    const { title ,rating,body} = route.params;
    
    return (
        <View style={globalStyles.container}>
           <Card>
           <Text style={globalStyles.titleText}>{title}</Text>
           <Text style={globalStyles.titleText}>{body}</Text>
           <View style={globalStyles.rating}>
               <Text>GameZone rating:</Text>
               <Image source={images.ratings[rating]}></Image>
           </View>
           </Card>
       </View>
    )
}



export default ReviewDetails
