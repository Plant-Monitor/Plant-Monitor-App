import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

//The task takes in props (The text that you output is a prop)
const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                {/* The style of the sqaure or the measurement metric */}
                {/* <TouchableOpacity style={styles.square}></TouchableOpacity> */}
            {/* The styling of the text itself */}
            <Text style={styles.itemText}> {props.text}</Text>
            </View>
            <View style={styles.itemRight}></View>
            {/* <Text style={styles.itemTextElement}>{props.metric_2}</Text> */}
            <TouchableOpacity style={styles.square}><Text style={styles.itemTextElement}>{props.metric_2}</Text></TouchableOpacity>
        </View>
    )
}

// a = 1;
// if (a == 2){
//     metric = 80;
// }

const styles= StyleSheet.create({
    item: {
        backgroundColor: '#FFE4C4',
        marginTop : 30,
        marginHorizontal :15,
        marginBottom : 20,
        padding : 30,
        paddingHorizontal : 20,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent : 'space-between',

    },
    itemLeft : {
        flexDirection : 'row',
        alignItems : 'center',
        flexWrap : 'wrap',
        
    },
    square : {
        width : 120,
        height : 120,
        backgroundColor : 'green',
        opacity : 0.4,
        borderRadius: 25,
    },
    itemText: {
        fontFamily : 'Sans Serif',
        fontSize : 35,
    },
    itemTextElement: {

        fontFamily : 'Sans-Serif',
        fontSize : 45,
        textAlign : 'center',
        color : 'white',
        marginTop : 30,
        marginHorizontal :10,
        marginBottom : 30,


    }
})


export default Task;
