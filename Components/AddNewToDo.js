// import { red } from "@mui/material/colors";
// import { borderColor, color } from "@mui/system";
import { Button, TextInput } from "@react-native-material/core";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
let counter = 1;

export const AddNewToDo = ({onToDoAdd}) => {
  const [title, setTitle] = useState("");
  const [done, setDone] = useState(false);

  const titleRef = useRef();

  const handelAddTodo = () => {
    const todo = {
        id: counter++,
      title,
      done: false,
    };
    onToDoAdd(todo);
    setTitle('');
    console.log(todo);
  };

//   useEffect(()=>{
//     console.log(title);
//     if(title.length !=3 && title.length !=0){
//         // titleRef.current.style.borderColor = 'red';
//         // titleRef.current.setNativeProps({
//         //     style:{borderColor: 'red'}
//         // });
//     }
//     else if(title.length !=0){
//         // titleRef.current.style.borderColor = 'black';
//         // titleRef.current.setNativeProps({
//         //     style:{borderColor: 'black'}
//         // });
//     } 
//   }, [title])


  return (
    <View style={styles.container}>
        <TextInput
            // variant="standard"
            placeholder="Task"
            ref={titleRef}
            // style={styles.todoInp}
            style={(title.length > 3) ? styles.todoInpGreen : styles.todoInpRed}
            // wrapperStyle={(title > 3) ? styles.todoInpGreen : styles.todoInpRed}
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
  );
};

const styles = StyleSheet.create({
    todoInpGreen:{
        width:200,
        borderWidth:2,
        borderColor: 'green'
    },
    todoInpRed:{
        width:200,
        borderWidth:1,
        borderColor: 'red'
    },
    btnAdd: {
        width: 100,
        height:40
    },
    container:{
        display:'flex',
        flexDirection:'row',
        padding:5,
        justifyContent:'space-between'
    },
})



// export default AddNewToDo;
