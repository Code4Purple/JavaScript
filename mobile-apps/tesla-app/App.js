import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CarItem from './components/Caritem/index';

export default function App() {
  return (
    <View>
      <CarItem/>
      <StatusBar style="auto" />
    </View>
  );
}

