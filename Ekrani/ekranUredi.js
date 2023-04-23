import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
import UrediDropdown from "../komponente/editabilnaDropdown";
import { AntDesign } from '@expo/vector-icons'; 
import ModalDodaj from "../komponente/modalDodaj";

const Uredi = (props) => {
  const [unosVidljiv, postaviVidljivostUnosa]= useState(false);
  
  const odustaniModal = () => {
    postaviVidljivostUnosa(false)
  }

  return (
    <View style={styles.ekran}>
      <View>
        <TouchableOpacity style={styles.botun2} onPress={() => {props.settrenutni(2)}}>
          <AntDesign name="left" size={40} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <UrediDropdown data={props.podaci} kolekcija={props.kolekcija} />
      </ScrollView>
      <View>
        <TouchableOpacity style={styles.botun1} onPress={() => postaviVidljivostUnosa(true)}>
          <AntDesign name="plus" size={40} color="white" />
        </TouchableOpacity>
      </View>
      <ModalDodaj vidljiv={unosVidljiv} odustani={odustaniModal} kolekcija={props.kolekcija} proizvod={props.podaci} />
    </View>
  );
   
};

const styles = StyleSheet.create({
    ekran: {
        marginTop: 50
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
    backgroundColor: '#1F85DE',
    borderRadius: 5,
    marginTop: 5,
    padding: 10,
    width: 105,
    display: 'flex',
    alignSelf: 'center',
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
  },
  botun2: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
    height: 80,    
    padding:20,
    backgroundColor: '#ffbb33',
    borderRadius: 10,
    justifyContent: 'center'
  },
  botun1: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
    height: 80,    
    padding:20,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#0066cc',
  },
});

export default Uredi;