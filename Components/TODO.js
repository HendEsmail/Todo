import React from "react";

import { Button, TextInput } from "@react-native-material/core";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
let counter = 1;
////////////////////////////////

// import { Text } from "@react-native-material/core";
// import { useState } from "react";
// import { List } from "@mui/material";
import { FlatList, TouchableOpacity } from "react-native";
import CheckBox from "react-native-check-box";

const TODO = () => {
  const [list, setList] = useState([]);

  const AddTodo = (todo) => {
    setList([...list, todo]);
  };
  ///////////////////////////////////////////
  const [title, setTitle] = useState("");
  const [doneCounter, setDoneCounter] = useState(0);
  const [allTasks, setAllTasks] = useState(0);

//   const titleRef = useRef();

  const handelAddTodo = () => {
    const todo = {
      id: counter++,
      title,
      done: false,
    };
    if (title.length > 3) {
        setTitle("");
        setAllTasks(allTasks + 1);
        AddTodo(todo);
        
    } else alert("4 Chars at least");
  };

  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <View style={styles.containerRow}>
        <TextInput
          variant="filled"
          placeholder="Task"
          style={title.length > 3 ? styles.todoInpGreen : styles.todoInpRed}
          value={title}
          onChangeText={(e) => {
            setTitle(e);
          }}
        />

        <Button
          style={styles.btnAdd}
          title="Add"
          variant="contained"
          color="green"
          onPress={handelAddTodo}
        />
      </View>

      <View style={styles.containerRow}>
        <Text style={{ fontSize: 30, textAlign: "center", }}>
          {doneCounter} finished from {allTasks}
        </Text>
      </View>
      
      <FlatList
        style={styles.listContainer}
        data={list}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              <Text style={item.done ? styles.textStrike : styles.textTitle}>
                {item.title}
              </Text>
              <View style={styles.doneContainer}>
                <Text style={{fontSize:20, marginRight:15, paddingTop:15}}>Done</Text>
                <TouchableOpacity>
                  <CheckBox
                    onClick={() => {
                      var newList = [...list];
                      var task = newList.find((t) => t.id == item.id);
                      var taskIndex = newList.findIndex((t) => t.id == item.id);
                      task["done"] = !task["done"];
                      task["done"] == true
                        ? setDoneCounter(doneCounter + 1)
                        : setDoneCounter(doneCounter - 1);
                      newList.splice(taskIndex, 1);
                      newList.push(task);
                      newList.sort((a, b) => a.id > b.id);
                      setList(newList);
                      console.log(item.id + ": " + item["done"]);
                      setList(newList);
                    }}
                    value={item.done}
                    isChecked={item.done}
                    style={{paddingTop:19}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => `${item.id}${index}`}
        ListHeaderComponent={() => <Text style={styles.listHeader}>TODO</Text>}
        ItemSeparatorComponent={() => (
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 3,
              margin: 2,
            }}
          ></View>
        )}
        ListEmptyComponent={() => (
          <Text style={{ fontSize: 30, textAlign: "center", color: "green" }}>
            {" "}
            No Tasks TODO{" "}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todoInpGreen: {
    width: 200,
    borderWidth: 2,
    borderColor: "green",
  },
  todoInpRed: {
    width: 200,
    borderWidth: 1,
    borderColor: "red",
  },
  textStrike: {
    fontSize: 40,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  textTitle: {
    fontSize: 40,
  },
  btnAdd: {
    width: 100,
    height: 40,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 5,
    justifyContent: "space-between",
  },
  containerRow: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-around",
    // alignContent: ''
  },

  //////////////////////
  listContainer: {
    margin: 5,
    padding: 2,
    height: "100%",
  },
  listHeader: {
    fontSize: 50,
    textAlign: "center",
    margin: 10,
    color:'green'
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  doneContainer: {
    display: "flex",
    flexDirection: "row",
    width: "20%",
    justifyContent: "space-around",
  },
});

export default TODO;
