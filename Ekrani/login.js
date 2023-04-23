import { SafeAreaView, Text, StyleSheet, TouchableOpacity, TextInput, Alert, View } from "react-native";
import React, { useState, useEffect, useRef } from 'react';

const Login = (props) => {
  const [username, onChangeUsername] = useState('');
  const [lozinka, onChangePassword] = useState('');

  return (
    <SafeAreaView style={styles.ekran}>
      <View style={styles.container1}>
     
      <Text style={styles.tekst}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        placeholder="Username"
        value={username}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={lozinka}
        placeholder="Password"
      />
      <View style={styles.button}>
      <TouchableOpacity style={styles.button1} onPress={() => {
        if (username == 'peppers' && lozinka == '2023Peppers') {
          props.settrenutni(2);
        } else {
          Alert.alert('Kriva lozinka ili username!');
        }
      }}>
        <Text style={styles.buttonText}>Prijavi se</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => {props.settrenutni(0)}}>
        <Text style={styles.buttonText}>Odustani</Text>
      </TouchableOpacity>
      </View>
      
      </View>
    </SafeAreaView>
  );
   
};

const styles = StyleSheet.create({
  ekran: {
    backgroundColor: '#103950',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    width: 250,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white'
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button1: {
    backgroundColor: '#1F85DE',
    borderRadius: 5,
    marginTop: 5,
    padding: 10,
    width: 105,
  },
  button2: {
    backgroundColor: '#AA0909',
    borderRadius: 5,
    marginTop: 5,
    padding: 10,
    width: 105,
  },
  tekst: {
    fontSize: 35,
    padding: 10
  },
  buttonText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white'
  },
  container1: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5
  }
});

export default Login;