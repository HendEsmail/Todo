// import { Checkbox } from "@mui/material";
import { Text } from "@react-native-material/core";
import React, { useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import CheckBox from "react-native-check-box";
// import { Checkbox } from "react-native-material-ui";
// import { Checkbox } from "react-native-material-ui";
// import { Checkbox, FlatList, View } from "react-native";
// import { Checkbox } from "react-native-material-ui";
// import { listStyles  as styles} from "../styles";

export const ToDoList = ({ toDoList }) => {
  const [task, setTask] = useState(toDoList[0]);
  return (
    <FlatList
      style={styles.listContainer}
      data={toDoList}
      renderItem={({ item }) => {
        return (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <View style={styles.doneContainer}>
              <Text>Done</Text>
              <TouchableOpacity>
                <CheckBox
                  onClick={() => {
                    toDoList = [{item, done:!done}, ...toDoList]
                  }}
                  value={item.done}
                />
              </TouchableOpacity>
            </View>
          </View>
        );
      }}
      keyExtractor={(item, index) => `${item.id}${index}`}
      ListHeaderComponent={() => <Text style={styles.listHeader}>TODOS</Text>}
      ItemSeparatorComponent={() => (
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 3,
            margin: 2,
          }}
        ></View>
      )}
      ListEmptyComponent={() => <Text>please add todo!</Text>}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    margin: 5,
    padding: 2,
    height: "100%",
  },
  listHeader: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
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

// export default ToDoList;
