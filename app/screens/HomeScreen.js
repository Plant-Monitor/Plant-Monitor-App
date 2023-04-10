import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


function HomeScreen () {
  return (
    <View style={styles.container}>
      <View style={styles.greenBar}>
        <View style={styles.leftEnd}>
          <View style={[styles.bar, {height: 3, width: 15}]}></View>
          <View style={[styles.bar, {height: 3, width: 15}]}></View>
          <View style={[styles.bar, {height: 3, width: 15}]}></View>
        </View>
        <Text style={styles.title}>Plant Trackr</Text>
        <TouchableOpacity>
          <View style={styles.rightEnd}>
            <MaterialIcons name="add" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.circleContainer}>
          <Image source={require('../assets/chinese-evergreen-plant.jpg')} style={styles.circleImage} />
          <Text style={styles.circleText}>Jim</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
},
greenBar: {
  backgroundColor: 'green',
  height: 90,
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  paddingHorizontal: 20,
},
leftEnd: {
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  height: '100%',
},
bar: {
  backgroundColor: 'white',
  width: 10,
  marginBottom: 5,
},
title: {
  color: 'white',
  fontSize: 24,
  flex: 1,
  textAlign: 'center',
},
rightEnd: {
  alignItems: 'center',
  justifyContent: 'center',
  height: 22,
  width: 23,
  borderRadius: 12,
  borderWidth: 2,
  borderColor: 'white',
},
content: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
centeredText: {
  fontSize: 20,
  fontWeight: 'bold',
},
circleContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 20,
},
circleImage: {
  width: 80,
  height: 80,
  borderRadius: 40,
  marginRight: 10,
},
circleText: {
  fontSize: 20,
  fontWeight: 'bold',
},
})

export default HomeScreen;