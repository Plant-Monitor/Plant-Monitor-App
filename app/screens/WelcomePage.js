import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
//const image = <Image source={require('../assets/plant-trackr-logo.png')} style={styles.logo} />
const WelcomePage = () => {
  return (
    <ImageBackground
      source={require('../assets/plant-trackr-logo.png')}
      style={styles.background}
      resizeMode= 'contain'
    >
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: 'rgb(80,160,96)',
    //height:850,
    //width:400,
    //transform:[{scale: 1}]
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'rgba(74, 172, 137, 0.5)',
  },
  logo: {
    height: 120,
    width: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
})

export default WelcomePage;
