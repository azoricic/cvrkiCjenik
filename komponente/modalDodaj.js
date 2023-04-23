import React, { useState } from 'react'
import { View, TextInput, StyleSheet,  Modal, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import {firebase} from '../config'

const ModalDodaj = (props) => {
  const [cijena, postaviCijenu] = useState("");
  const [mjera, postaviMjeru] = useState("");
  const [label, postaviLabelu] = useState("");

  function dodajProizvod(){
    var proizvod = {
      "label" : label,
      "mjera" : mjera,
      "cijena" : cijena
    }
    addProizvod(proizvod)
  };

  function addProizvod(proizvod){
    firebase.firestore()
        .collection(props.kolekcija)
        .add(proizvod)
        .then((snapshot) => {
            proizvod.id = snapshot.id
            snapshot.set(proizvod)
        })
        .catch((error) => console.log(error))
}
  
  return (
    <Modal visible={props.vidljiv} animationType="fade" transparent={true}> 
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.btn1}>            
            <TouchableOpacity style={styles.botun} onPress={props.odustani}>
              <AntDesign name="close" size={40} color="black" />
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="Naziv"
            style={styles.unos}
            name={label}
            onChangeText={text => postaviLabelu(text)}
          />
          <TextInput
            placeholder="Norma"
            style={styles.unos}
            name={mjera}
            onChangeText={text => postaviMjeru(text)}
          />
          <TextInput
            placeholder="Cijena"
            style={styles.unos}
            name={cijena}
            onChangeText={text => postaviCijenu(text)}
          />
          <View style={styles.btn2}>
            <TouchableOpacity onPress={()=> { dodajProizvod(); props.odustani(); }} style={styles.botun}>
              <AntDesign name="plus" size={40} color="white" />
            </TouchableOpacity>
          </View>  
        </View>  
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)"
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  unos: {
    width: '80%',
    marginBottom: 25,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    textAlign: 'center',
    fontSize: 20  
  },
  botun: {
    width: '100%',
    padding: 3,
    margin: 10,    
  },
  btn1: {
    padding: 0,
    borderRadius: 100,
    alignSelf: "flex-end",
  },
  btn2: {
    padding: 3,
    borderRadius: 20,
    alignSelf: "center",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: "#b53636",
  },
});

export default ModalDodaj