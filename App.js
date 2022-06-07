import { AppBar } from '@react-native-material/core';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AddNewToDo} from './Components/AddNewToDo';
import TODO from './Components/TODO';
// import AddTodo from './Components/AddTodo';
import {ToDoList} from './Components/ToDoList';

export default function App() {

  // const [list,setList] = useState([]);

  // const AddTodo = (todo)=>{
  //   setList([...list,todo])
  // }
  const [done, setDone] = useState(false);


  return (
    <View style={styles.container}>
      {/* <AddNewToDo onToDoAdd={AddTodo}/>
      <ToDoList toDoList={list}/> */}
      <TODO/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:20,
    marginTop:100
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
