// // import { TextField } from '@react-native-mui/material';
// // import { TextField } from '@react-native-material/ui';
// // import { Input } from '@mui/material';
// // import { Text } from '@react-native-material/core';
// // import { Input } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { Button, TextInput } from '@react-native-material/core';

// const AddTodo = ({onToDoAdd}) => {

//     const [title, setTitle] = useState('');
//     const [done, setDone] = useState(false);

//     const handelAddTodo = ()=>{
//         const todo={
//             title,
//             done:false
//         }
//         title && onToDoAdd(todo);
//         setTitle('');
//     }

//     useEffect(()=>{
        
//     },[title])

//     return(
//         // <TextField id="filled-basic" label="Filled" variant="filled" />
//         <View style={styles.container}>
            
//             <TextInput
//                 variant="filled"
//                 placeholder="Filled"
//                 style={styles.todoInp}
//                 value={title}
//                 onChange={(e)=>{
//                     setTitle(e.target.value)
//                 }}
//             />

//             <Button style={styles.btnAdd} title="Add" variant="contained" color="green"
//                 onPress={handelAddTodo}
//             />

//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     todoInp:{
//         width:200
//     },
//     btnAdd: {
//         width: 100,
//         height:40
//     },
//     container:{
//         display:'flex',
//         flexDirection:'row',
//         padding:5,
//         justifyContent:'space-between'
//     },
// })

// export default AddTodo;

import React from 'react';
import { View } from 'react-native';

const AddTodo = () => {
    return (
        <View>
            <Text>Add</Text>
        </View>
    );
};

export default AddTodo;