import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
//import { StatusBar } from 'react-native';
//import { useHeaderHeight } from '@react-navigation/native';

const PlantInfoScreen = () => {
  const [plantInfo, setPlantInfo] = useState({});

  useEffect(() => {
    // Retrieve plant information from data source
    const plantData = {
      name: 'Snake plant(Jim)',
      species: 'Sansevieria trifasciata',
      image: require('../assets/snake_plant.jpg'),
      watering: 'Water once a week',
      sunlight: 'Medium to low light',
      temperature: '15-30°C',
    };

    // Set plant information to state
    setPlantInfo(plantData);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.greenBar}>
      <View style={styles.leftEnd}>
        <View style={[styles.bar, { height: 3, width: 15 }]}></View>
        <View style={[styles.bar, { height: 3, width: 15 }]}></View>
        <View style={[styles.bar, { height: 3, width: 15 }]}></View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.bar_title}>Plant Trackr</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.rightEnd}>
          <MaterialIcons name="add" size={20} color="#f5fcff" />
        </View>
      </TouchableOpacity>
    </View>
      <Image source={plantInfo.image} style={styles.image} />
      <Text style={styles.title}>{plantInfo.name}</Text>
      <Text style={styles.subtitle}>{plantInfo.species}</Text>
      <Text style={styles.description}>Best practices:</Text>
      <Text style={styles.text}>- {plantInfo.watering}</Text>
      <Text style={styles.text}>- {plantInfo.sunlight}</Text>
      <Text style={styles.text}>- Keep temperature between {plantInfo.temperature}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5fcff',
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  greenBar: {
    backgroundColor: '#50A060',
    height: 90,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position: 'absolute', // Position the green bar at the top of the screen
    top: 0, // Position the green bar at the top of the screen
    left: 0, // Position the green bar at the left edge of the screen
    right: 0, // Position the green bar at the right edge of the screen
  },
  leftEnd: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    height: '100%',
  },
  bar: {
    backgroundColor: '#f5fcff',
    width: 10,
    marginBottom: 5,
  },
  rightEnd: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 22,
    width: 23,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#f5fcff',
    marginBottom: 1,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    left: 135,
  },
  bar_title:{
    fontSize: 24,
    fontWeight: 'bold',
    //marginBottom: 0,
    color: '#f5fcff',
  },
});


export default PlantInfoScreen;