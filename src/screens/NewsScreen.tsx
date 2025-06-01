import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewsDetailsScreen = ({ route }) => {
  const news = route.params.news;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.author}>By {news.author}</Text>
      <Text style={styles.url} onPress={() => Linking.openURL(news.url)}>{news.url}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  author: {
    fontSize: 18,
    color: '#666',
    marginVertical: 5,
  },
  url: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default NewsDetailsScreen;