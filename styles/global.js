import {StyleSheet} from 'react-native' 

export const globalStyles=StyleSheet.create({
    container:{
        padding:24
      },
      titleText:{
        fontFamily:'nunito-Bold',
        fontSize:18,
        color:'#333'
      },
      paragraph:{
          marginVertical:8,
          lineHeight:20
      },
      rating:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:16,
        marginTop:16,
        borderTopWidth:3,
        borderTopColor:'#777'
      },
      modalToggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor:'#f2f2f2',
        padding:10,
        alignSelf:'center'
      },moadlClose:{
        marginTop:20,
        marginBottom:0
      },
      ModalView:{
        flex:1
      },input:{
        borderWidth:1,
        borderColor:'#ddd',
        padding:10,
        fontSize:18,
        borderRadius:6
      },
      errorText:{
        color:'crimson',
        fontWeight:'bold',
        marginBottom:10,
        marginTop:6,
        textAlign:'center'
      }

})

export const images={
  ratings:{
    '1':require('../assets/rating-1.png'),
    '2':require('../assets/rating-2.png'),
    '3':require('../assets/rating-3.png'),
    '4':require('../assets/rating-4.png'),
    '5':require('../assets/rating-5.png'),
  }
}

