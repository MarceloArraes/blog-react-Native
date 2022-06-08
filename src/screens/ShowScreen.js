import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React,{useContext} from 'react'
import {Context} from '../context/BlogContext'
import { AntDesign } from '@expo/vector-icons';

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

ShowScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit',{id: navigation.getParam('id')})}>
        <AntDesign name="edit" size={30} color='black' style={{ paddingRight:20}} />
      </TouchableOpacity>
    ),
  };
};

export default ShowScreen

const styles = StyleSheet.create({})