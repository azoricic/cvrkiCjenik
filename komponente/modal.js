import React, { useState } from 'react'
import { View, TextInput, StyleSheet,  Modal, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import {firebase} from '../config'

const ModalUredi = (props) => {

  const [cijena, postaviCijenu] = useState("");
  const [mjera, postaviMjeru] = useState("");
  const [label, postaviLabelu] = useState("");

  async function updateData(kolekcija){
    const proizvod = {};
    
    if(label!=""){
      proizvod.label=label
    }
    if(cijena!=""){
      proizvod.cijena=cijena
    }

    if(mjera!=""){
      proizvod.mjera=mjera
    }

    console.log(proizvod)
    firebase.
    firestore().
    collection(kolekcija).
    doc(props.podaci.id).
    update(proizvod).
    catch((error) => console.log(error))
  }

  async function deleteData(kolekcija){
    firebase.
    firestore().
    collection(kolekcija).
    doc(props.podaci.id).
    delete().
    catch((error) => console.log(error))
  }

  return (
    <Modal visible={props.vidljiv} animationType="fade" transparent={true}> 
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            placeholder={props.label}
            style={styles.unos}
            onChangeText={text => postaviLabelu(text)}
          />
          <TextInput
            placeholder={props.mjera}
            style={styles.unos}
            onChangeText={text => postaviMjeru(text)}
          />
          <TextInput
            placeholder={props.cijena}
            style={styles.unos}
            onChangeText={text => postaviCijenu(text)}
          />
          <View style={styles.botuni}>
            <View style={styles.btn3}>
                <TouchableOpacity onPress={()=> { updateData(props.kolekcija); props.odustani(); }} style={styles.botun}>
                    <AntDesign name="check" size={40} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.btn2}>
                <TouchableOpacity onPress={props.odustani} style={styles.botun}>
                    <AntDesign name="close" size={40} color="white" />
                </TouchableOpacity>
            </View>  
            <View style={styles.btn1}> 
                <TouchableOpacity style={styles.botun} onPress={()=> { deleteData(props.kolekcija); props.odustani();}}> 
                    <AntDesign name="delete" size={40} color="white" />
                 </TouchableOpacity>
            </View>
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
  botuni: {
    display: 'flex',
    flexDirection: 'row'
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
  btn3: {
    padding: 3,
    borderRadius: 20,
    alignSelf: "center",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: "#3FAA09",  
  },
  btn1: {
    padding: 3,
    borderRadius: 20,
    alignSelf: "center",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: "#0960AA", 
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

export default ModalUredi