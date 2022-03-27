import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { Navbar } from './src/Navbar';
import { TodoCreator } from './src/TodoCreator';
import { TodoList } from './src/TodoList';

export default function App() {

const [todos, setTodos] = useState([])

const addTodo = (title) => {
  // setTodos((prevTodos) => {
  //   return [
  //     ...prevTodos,
  //     newTodo
  //   ]
  // })
  setTodos(prev => [...prev, {
    id: Date.now().toString(),
    title
  }])
}

const deleteTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id))
}


  return (
    <View style={styles.container}>
      <Navbar title="Nice Todo"/>
      <TodoCreator onSubmit={addTodo}/>
      <TodoList todos={todos} onDelete={deleteTodo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#557',
    alignItems: 'flex-start',
  },
  text: {
    color: '#fff'
  }
});
