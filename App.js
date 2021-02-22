import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './component/CarItem'
import CarsList from './component/CarsList'
import Header from './component/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
