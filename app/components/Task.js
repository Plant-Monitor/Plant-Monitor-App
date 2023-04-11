import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity,} from 'react-native';
//The task takes in props (The text that you output is a prop)

function Task ({metric, interpretation, level, unit}) {
    



    let squareColor; // default color


   switch (interpretation) {
    case "GOOD":
        squareColor = "green"
        break;
    case "OKAY":
        squareColor = "yellow"
        break;
    case "CRITICAL":
        squareColor = "red"
        break;
   }

   console.log(`interpretation: ${interpretation}`);

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                {/* <TouchableOpacity style={styles.square}></TouchableOpacity> */}
            {/* The styling of the text itself */}
            <Text style={styles.itemText}> {metric} </Text>
            <Text style={styles.itemTextElementLevel}> {`${level} ${unit}`} </Text>
            </View>
            {/* <View style={[styles.square, {backgroundColor:squareColor}]}><Text style={styles.itemTextElement}> {props.metric} </Text></View> */}
            <View style={[styles.square, {backgroundColor:squareColor}]}>
                <Text style={styles.itemTextElement}> {interpretation} </Text>
                
            </View>

        </View>
    )
}





const styles= StyleSheet.create({
    // item -> entire box 
    item: {
        backgroundColor: '#FFE4C4',
        marginTop : 30,
        marginHorizontal :15,
        marginBottom : 20,
        padding : 30,
        paddingHorizontal : 20,
        borderRadius:75,
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent : 'space-between',

    },
    itemLeft : {
        flexDirection : 'column',
        alignItems : 'center',
        flexWrap : 'wrap',
        
    },
    square : {
        width : 130,
        height : 120,
        //backgroundColor : 'green',
        opacity : 0.4,
        borderRadius: 70,
    },
    itemText: {
        // fontFamily : 'Rowdies',
        fontSize : 33,
        color : 'black',
        fontWeight : 'bold'
    },
    itemTextElement: {

        // fontFamily : 'Rowdies',
        fontSize : 25,
        textAlign : 'center',
        color : 'black',
        marginTop : 45,
        marginHorizontal: 0,
        // marginBottom : 5,
    },

    itemTextElementLevel: {

        // fontFamily : 'Rowdies',
        fontSize : 25,
        textAlign : 'center',
        color : 'black',
        marginTop : 10,
        marginHorizontal: 1,
        marginBottom : 10,
    }
})


export default Task;
