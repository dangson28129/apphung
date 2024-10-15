import React from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/Image/ngoisao.png')}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Thiết bị của bạn đang được quản lý bởi nhà trường!
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  background: {
    flex: 1,
    width: 'auto',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  text: {
    color: 'white',
    fontSize: 70,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
