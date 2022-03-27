import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";

export const TodoCreator = ({onSubmit}) => {
  
  const [title, setTitle] = useState('')


  const clickHandler = () => {
    if (title.trim()) {
      onSubmit(title)
      setTitle('')
    } else {
      Alert.alert('Enter your todo title')
    }
  }

  return (
    <View style={styles.todoCreator}>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Enter your todo title" autoCorrect={false} autoCapitalizes='sentences'/>
      <Button title="Create" color='orange'  style={styles.button} onPress={clickHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({
  todoCreator: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 40,
    backgroundColor: '#553',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent'

  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'white',
    flex: 0.95,
    fontSize: 16,
    paddingHorizontal: 10,
    color: '#fff',
    backgroundColor: '#555',
    borderRadius: 4,
    borderColor: "#555"
  },

})