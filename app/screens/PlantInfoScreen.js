import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PlantInfoScreen = () => {
  const [plantInfo, setPlantInfo] = useState({});

  useEffect(() => {
    // Retrieve plant information from data source
    const plantData = {
      name: 'Snake plant',
      species: 'Sansevieria trifasciata',
      image: require('../assets/snake_plant.jpg'),
      watering: 'Water once a week',
      sunlight: 'Medium to low light',
      temperature: '60-85°F',
    };

    // Set plant information to state
    setPlantInfo(plantData);
  }, []);

  return (
    <View style={styles.container}>
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
});

export default PlantInfoScreen;
