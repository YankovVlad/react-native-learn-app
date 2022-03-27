import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

export const TodoItem = ({todo, index, onDelete}) => {

  const deleteTodo = (id) => {
    onDelete(id)
  }

  return (
    <TouchableOpacity onLongPress={onDelete.bind(null, todo.id)}>
      <View style={styles.list__item}>
        <Text style={styles.text}>{index + 1}. {todo.title}</Text>
        <Button style={styles.button} title='Delete' color='darkred' onPress={onDelete.bind(null, todo.id)}/>
      </View>
    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
  list__item: {
    width: "100%",
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
    backgroundColor: '#679',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  
})