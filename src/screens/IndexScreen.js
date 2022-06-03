import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React,{useContext} from 'react'
import {Context} from '../context/BlogContext'

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
        return <Text style={styles.textStyle}>{item.title} {item.content}</Text>
      }}/>
      
      
    </View>
  )
}

export default IndexScreen

const styles = StyleSheet.create({
textStyle:{
  fontSize:30,
  color: 'blue',
}
})