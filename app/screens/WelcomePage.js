import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const WelcomePage = () => {
  return (
    <ImageBackground
      source={require('../assets/welcome-plants-background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Plant-Trackr</Text>
        <Text style={styles.subtitle}>Track your plants with ease</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
})

export default WelcomePage;