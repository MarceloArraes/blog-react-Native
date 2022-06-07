import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, {useContext, useState} from 'react'
import {Context} from '../context/BlogContext'

const CreateScreen = ({navigation}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const {addBlogPost} = useContext(Context)
  console.log(navigation);
  return (
    <View>
      <Text style={styles.label}>Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)} />
      <Text style={styles.label}>Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={(text)=>setContent(text)} />
      <Button title="Add Post" onPress={()=>{
      addBlogPost(title, content, ()=>{
      navigation.navigate('Index')
      });
      }}/>
    </View>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
label:{
  fontSize:30,
  marginBottom:10,
  marginHorizontal:10,
},
input:{
  fontSize:20,
  borderWidth:1,
  borderColor:'black',
  marginBottom:10,
  padding:5,
  marginHorizontal:10,
}
})