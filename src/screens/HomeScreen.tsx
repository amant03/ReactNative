import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App'; 

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

interface Props {
  route: HomeScreenRouteProp;
}

const HomeScreen: React.FC<Props> = ({ route }) => {
  const { userName } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome, {userName}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
  },
});

export default HomeScreen;