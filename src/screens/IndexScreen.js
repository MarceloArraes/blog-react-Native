import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React,{useContext} from 'react'
import {Context} from '../context/BlogContext'
import {Feather} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

const IndexScreen = () => {
const {state, addBlogPost, deleteBlogPost} = useContext(Context)

  return (
    <View>
      <Text>IndexScreen </Text>
      <Button title="add post" onPress={addBlogPost}/>
      {/* <Button title="delete post" onPress={()=>deleteBlogPost()}/> */}
      <FlatList 
      data={state}
      keyExtractor={(blogPost)=> blogPost.title}
      renderItem={({item})=>{
        return <View style={styles.row}>
              <Text style={styles.textStyle}>{item.title} {item.content}</Text>
              <TouchableOpacity  onPress={()=>deleteBlogPost(item.id)}>
              <Feather name='trash' style={styles.iconStyle}/>
              </TouchableOpacity>
              </View>
      }}/>
      
      
    </View>
  )
}

export default IndexScreen

const styles = StyleSheet.create({
row:{
  flexDirection:'row',
  justifyContent:'space-between',
  paddingVertical:20,
  borderTopWidth:1,
  borderColor:'gray',
  paddingHorizontal:10,
},
textStyle:{
  fontSize:30,
  color: 'blue',
},
iconStyle:{
  fontSize:30,

}
})