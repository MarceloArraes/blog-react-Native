import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import {Context} from '../context/BlogContext'

const ShowScreen = ({navigation}) => {
  //console.log("navigation.getParam('id')",navigation.getParam('id'))
  const {state} = useContext(Context)

  const blogPost = state.find((blogPost)=> blogPost.id === navigation.getParam('id'))

  return (
    <View>
      <Text>ShowScreen</Text>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>

    </View>
  )
}

export default ShowScreen

const styles = StyleSheet.create({})