import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React,{useContext} from 'react'
import {Context} from '../context/BlogContext'
import {Feather} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
const {state, addBlogPost, deleteBlogPost} = useContext(Context)

  return (
    <View>
      <View style={styles.header}>
      <Text style={{color:'white'}}>IndexScreen </Text>
      <AntDesign name="plussquareo" size={24} color="white" />
      </View>
      <Button title="add post" onPress={addBlogPost}/>
      {/* <Button title="delete post" onPress={()=>deleteBlogPost()}/> */}
      <FlatList 
      data={state}
      keyExtractor={(blogPost)=> blogPost.title}
      renderItem={({item})=>{
        return (
              <TouchableOpacity onPress={()=>navigation.navigate('Show',{id: item.id})}>
              <View style={styles.row}>
              <Text style={styles.textStyle}>{item.title} {item.content}</Text>
              <TouchableOpacity  onPress={()=>deleteBlogPost(item.id)}>
              <Feather name='trash' style={styles.iconStyle}/>
              </TouchableOpacity>
              </View></TouchableOpacity>)
      }}/>
      
      
    </View>
  )
}

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} color='black' style={{ paddingRight:20}} /> 
      </TouchableOpacity>
    ),
  };
};

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
},
header:{
    flexDirection:'row',
      justifyContent:'space-between',
      fontSize:55,
      fontWeight:'bold',
      paddingHorizontal:10,
      paddingVertical:10,
      margin:10,
      backgroundColor:'gray',
}
})

/*     headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  }; */