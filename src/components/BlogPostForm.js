import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React,{useState, useContext} from 'react'
import {Context} from '../context/BlogContext'

const BlogPostForm = ({onSubmit, initialValues}) => {
  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)
  const {addBlogPost} = useContext(Context)
  return (
    <View>
      <View>
      <Text style={styles.label}>Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)} />
      <Text style={styles.label}>Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={(text)=>setContent(text)} />
      <Button title="Add Post" onPress={()=>{
      onSubmit(title, content);
      }}/>
    </View>
    </View>
  )
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
};

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
export default BlogPostForm