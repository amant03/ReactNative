import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App'; // Adjust the import path as necessary
import ProfileMenu from './ProfileMenu';

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

interface Props {
  route: HomeScreenRouteProp;
}

const HomeScreen: React.FC<Props> = ({ route }) => {
  const { userName } = route.params;
  return (
    <View style={styles.container}>
      <ProfileMenu userName={userName} />
      <Text style={styles.welcome}>Welcome, {userName}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  welcome: {
    fontSize: 24,
    color: '#3498db',
  },
});

export default HomeScreen;