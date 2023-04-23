import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, LogBox } from "react-native";
import DropDownLista from "../komponente/dropDownLista";
import React, { useState, useEffect, useRef } from 'react';
import {firebase} from '../config'
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';

const Kategorije = (props) => {
  const [proizvodiT, setProizvodiT] = useState([])
  const [proizvodiB, setProizvodiB] = useState([])
  const [proizvodiP, setProizvodiP] = useState([])
  const [proizvodiV, setProizvodiV] = useState([])
  const [proizvodiZS, setProizvodiZS] = useState([])
  const [proizvodiZD, setProizvodiZD] = useState([])

  const topliNapitci = firebase.firestore().collection('topliNapitci')
  const bezalkoholnaPica = firebase.firestore().collection('bezalkoholnaPica')
  const piva = firebase.firestore().collection('piva')
  const vina = firebase.firestore().collection('vina')
  const zestokaPicaStrana = firebase.firestore().collection('zestokaPicaStrana')
  const zestokaPicaDomaca = firebase.firestore().collection('zestokaPicaDomaca')

  useEffect(() => {
    topliNapitci.onSnapshot(querySnapshot => {
      const proizvodi = []
      querySnapshot.forEach((doc) => {
        const {label, cijena, mjera} = doc.data()
        proizvodi.push({
          id:doc.id,
          label,
          cijena,
          mjera,
        })
      })
      proizvodi.forEach(element => {
        proizvodiT.push(element)
        
      });
    })

    bezalkoholnaPica.onSnapshot(querySnapshot => {
      const proizvodi = []
      querySnapshot.forEach((doc) => {
        const {label, cijena, mjera} = doc.data()
        proizvodi.push({
          id:doc.id,
          label,
          cijena,
          mjera,
        })
      })
      proizvodi.forEach(element => {
        proizvodiB.push(element)
        
      });
    })
    
    piva.onSnapshot(querySnapshot => {
      const proizvodi = []
      querySnapshot.forEach((doc) => {
        const {label, cijena, mjera} = doc.data()
        proizvodi.push({
          id:doc.id,
          label,
          cijena,
          mjera,
        })
      })
      proizvodi.forEach(element => {
        proizvodiP.push(element)
        
      });
    })

    vina.onSnapshot(querySnapshot => {
      const proizvodi = []
      querySnapshot.forEach((doc) => {
        const {label, cijena, mjera} = doc.data()
        proizvodi.push({
          id:doc.id,
          label,
          cijena,
          mjera,
        })
      })
      proizvodi.forEach(element => {
        proizvodiV.push(element)
        
      });
    })

    zestokaPicaDomaca.onSnapshot(querySnapshot => {
      const proizvodi = []
      querySnapshot.forEach((doc) => {
        const {label, cijena, mjera} = doc.data()
        proizvodi.push({
          id:doc.id,
          label,
          cijena,
          mjera,
        })
      })
      proizvodi.forEach(element => {
        proizvodiZD.push(element)
        
      });
    })

    zestokaPicaStrana.onSnapshot(querySnapshot => {
      const proizvodi = []
      querySnapshot.forEach((doc) => {
        const {label, cijena, mjera} = doc.data()
        proizvodi.push({
          id:doc.id,
          label,
          cijena,
          mjera,
        })
      })
      proizvodi.forEach(element => {
        proizvodiZS.push(element)
        
      });
    })
  }, [])
    
  return (
      <View style={styles.ekran}>
        <View style={styles.strelica}>
            <TouchableOpacity style={styles.botun2} onPress={() => {props.settrenutni(0)}}>
            <AntDesign name="home" size={40} color="white" />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.kategorije}>
          <View style={styles.okvirBotuna}>
          <TouchableOpacity style={styles.button} onPress={() => {props.settrenutni(3); props.setpodaci(proizvodiT); props.setkolekcija("topliNapitci")}}>
              <Image style={styles.slika} source={require('../assets/coffee.jpg')} />
              <View style={styles.okvirTektBotun}>
                <Text style={styles.buttonText}>Topli napitci</Text>
              </View>
            </TouchableOpacity>
          </View>          
          <View style={styles.okvirBotuna}>
            <TouchableOpacity style={styles.button} onPress={() => {props.settrenutni(3); props.setpodaci(proizvodiB); props.setkolekcija("bezalkoholnaPica")}}>
              <Image style={styles.slika} source={require('../assets/juice.jpg')} />
              <View style={styles.okvirTektBotun}>
                <Text style={styles.buttonText}>Bezalkoholna pića</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.okvirBotuna}>
            <TouchableOpacity style={styles.button} onPress={() => {props.settrenutni(3); props.setpodaci(proizvodiP); props.setkolekcija("piva")}}>
              <Image style={styles.slika} source={require('../assets/piva.jpg')} />
              <View style={styles.okvirTektBotun}>
                <Text style={styles.buttonText}>Pivo</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.okvirBotuna}>
            <TouchableOpacity style={styles.button} onPress={() => {props.settrenutni(3); props.setpodaci(proizvodiZD); props.setkolekcija("zestokaPicaDomaca")}}>
              <Image style={styles.slika} source={require('../assets/rakije.webp')} />
              <View style={styles.okvirTektBotun}>
                <Text style={styles.buttonText}>Žestoka pića domaća</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.okvirBotuna}>
            <TouchableOpacity style={styles.button} onPress={() => {props.settrenutni(3); props.setpodaci(proizvodiZS); props.setkolekcija("zestokaPicaStrana")}}>
              <Image style={styles.slika} source={require('../assets/viski.jpg')} />
              <View style={styles.okvirTektBotun}>
                <Text style={styles.buttonText}>Žestoka pića strana</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.okvirBotuna}>
            <TouchableOpacity style={styles.button} onPress={() => {props.settrenutni(3); props.setpodaci(proizvodiV); props.setkolekcija("vina")}}>
              <Image style={styles.slika} source={require('../assets/vino.png')} />
              <View style={styles.okvirTektBotun}>
                <Text style={styles.buttonText}>Vina</Text> 
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  ekran: {
    backgroundColor: '#103950',
    padding: 10,
    marginTop: 40
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 5,
    marginBottom: 0,
    display: 'flex',
    flexDirection: 'row',
    zIndex: 3
  },
  slika: {
    width: 80,
    height: 80,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8
  },
  okvirLogo: {
    alignItems: 'center',
    padding: 15,
  },
  buttonText: {
    fontSize: 20,
    padding: 16,
    alignSelf: 'center'
  },
  iconStyle: {
    padding: 10,
    alignSelf: 'center'
  },
  okvirTektBotun: {
    width: '75%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logo: {
    width: '100%',
    height: 149,
    marginTop: 30,
  },
  okvirBotuna:{
    marginBottom: 3,
  },
  footer:{
    display: 'flex',
    alignSelf: 'center',
    padding: 5
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
  kategorije: {
    marginTop: 8,
  }
});

export default Kategorije;