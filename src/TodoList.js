import React from 'react'
import { ScrollView, StyleSheet, View, Text, FlatList } from 'react-native'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, onDelete}) => {
  

  if (!todos.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Todo list is empty.</Text>
      </View>
    )
  }
  return (

    <FlatList style={styles.container}data={todos} keyExtractor={(item) => item.id} renderItem={({item, index}) => (<TodoItem todo={item} index={index} onDelete={onDelete}/>)}/>
    // <ScrollView style={styles.container}>
    //   {todos.map((todo,index) => {
    //   return (
    //     <TodoItem key={todo.id} todo={todo} index={index} onDelete={onDelete}/>
    //   )
    // })}

    // </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    borderRadius: 8
  },
  text: {
    color: 'lightgrey',
    fontSize: 16
  }
})