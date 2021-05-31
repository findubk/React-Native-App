import React,{useState} from 'react'
import { StyleSheet, Text, View,Button,FlatList,TouchableOpacity,Modal,Keyboard,TouchableWithoutFeedback } from 'react-native';
import  Card  from '../shared/Card';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import RewiewForm from './RewiewForm';


function Home({navigation}) {
    const [ModalOpen, setModalOpen] = useState(false)
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);

      const addReview=(review)=>{
          review.key=Math.random().toString()
          setReviews([review,...reviews])
          setModalOpen(false)
      }
    return (
       <View style={globalStyles.container}>

           <Modal visible={ModalOpen}>
               <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={globalStyles.ModalView}>
                <MaterialIcons
                    name='close'
                    size={24}
                    onPress={()=>{setModalOpen(false)}}
                    style={{...globalStyles.modalToggle,...globalStyles.moadlClose}}
                    />
                    <RewiewForm addReview={addReview}></RewiewForm>
                  
                </View>
                </TouchableWithoutFeedback>
           </Modal>

           <MaterialIcons
           name='add'
           size={24}
           onPress={()=>{setModalOpen(true)}}
           style={globalStyles.modalToggle}
          />

          

           

           
           <FlatList
            data={reviews}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>{navigation.navigate('ReviewDetails',item)}}>
                   <Card>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )}
            />
       </View>
    )
}


export default Home
