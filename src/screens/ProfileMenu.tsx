import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

interface Props {
  userName: string;
}

const ProfileMenu: React.FC<Props> = ({ userName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <Text style={styles.name}>{userName}</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>
      <View style={styles.menu}>
        <Pressable style={styles.item} onPress={() => console.log('Pressed')}>
          <Text style={styles.text}>My Profile</Text>
        </Pressable>
        <Pressable style={styles.item} onPress={() => console.log('Pressed')}>
          <Text style={styles.text}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  menu: {
    marginLeft: 16,
  },
  item: {
    width: 100,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
    marginBottom: 16,
  },
  text: {
    fontSize: 14,
    color: '#fff',
  },
});

export default ProfileMenu;