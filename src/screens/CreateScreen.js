import { View } from 'react-native'
import React,{useContext} from 'react'
import {Context} from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'


const CreateScreen = ({navigation}) => {
  const {addBlogPost} = useContext(Context)

    return (
    <View>
      <BlogPostForm onSubmit={(title, content)=>addBlogPost(title, content, ()=> navigation.navigate('Index'))}/>
    </View>
  )
}

export default CreateScreen

