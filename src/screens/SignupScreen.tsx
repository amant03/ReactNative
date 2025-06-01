import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Sign Up" onPress={() => navigation.navigate('Home')} style={styles.button} />
      <Text style={styles.text}>Already have an account? <Text style={styles.link} onPress={() => navigation.navigate('Login')}>Login</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    textAlign: 'center',
  },
  link: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default SignupScreen;