import { StyleSheet, Text, View, TextInput } from 'react-native'
import React,{useState, useContext} from 'react'
import {Context} from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({navigation}) => {
  const {state, addBlogPost, deleteBlogPost, editBlogPost} = useContext(Context)
  const id = navigation.getParam('id')
  const blogPost = state.find((blogPost)=> blogPost.id === id)


  return (
    <BlogPostForm 
      initialValues={{title: blogPost.title, content: blogPost.content}}
      onSubmit={(title, content)=>{
        editBlogPost(id, title, content, ()=> navigation.pop())
      }}
    />
  )
}

export default EditScreen

const styles = StyleSheet.create({})