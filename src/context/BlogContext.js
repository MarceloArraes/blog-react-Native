import { StyleSheet, Text, View } from 'react-native'
import React, {useReducer} from 'react'
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type){
    case 'add_blogpost':
      return [...state, {title: `Blog Post #${state.length+1}`}];
    case 'delete_blogpost':
      return [...state].pop();
    default:
      return state;
}

};

const addBlogPost = () => {
    dispatch({type: 'add_blogpost'});
  };

const deleteBlogPost= () => {
  dispatch({type: 'delete_blogpost'})
}

export const {Context, Provider} = createDataContext(
blogReducer, 
{addBlogPost, deleteBlogPost},
[]);
