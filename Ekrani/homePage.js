import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, LogBox } from "react-native";
import DropDownLista from "../komponente/dropDownLista";
import React, { useState, useEffect, useRef } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import {firebase} from '../config'

const HomePage = (props) => {
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

  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);

  const toggleDropdown = (id) => {
    if (id ==1){
      setVisible1(!visible1);
      setVisible2(false);
      setVisible3(false);
      setVisible4(false);
      setVisible5(false);
      setVisible6(false);
    }
    if (id ==2){
      setVisible2(!visible2);
      setVisible1(false);
      setVisible3(false);
      setVisible4(false);
      setVisible5(false);
      setVisible6(false);
    }
    if (id ==3){
      setVisible3(!visible3);
      setVisible2(false);
      setVisible1(false);
      setVisible4(false);
      setVisible5(false);
      setVisible6(false);
    }
    if (id ==4){
      setVisible4(!visible4);
      setVisible2(false);
      setVisible3(false);
      setVisible1(false);
      setVisible5(false);
      setVisible6(false);
    }
    if (id ==5){
      setVisible5(!visible5);
      setVisible2(false);
      setVisible3(false);
      setVisible4(false);
      setVisible1(false);
      setVisible6(false);
    }
    if (id ==6){
      setVisible6(!visible6);
      setVisible2(false);
      setVisible3(false);
      setVisible4(false);
      setVisible1(false);
      setVisible5(false);
    }
  };

  const renderDropdown = (podaci, visible) => {
    if (visible) {
      return (
          <DropDownLista data={podaci} />
      );
    }
  };

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

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
        <View style={styles.okvirLogo}>
          <Image style={styles.logo} source={require('../assets/peppers3.png')} />
        </View>
        <ScrollView>
          <View style={styles.okvirBotuna}>
            <TouchableOpacity style={styles.button} onPress={() => toggleDropdown(1)}>
              <Image style={styles.slika} source={require('../assets/coffee.jpg')} />
              <View style={styles.okvirTektBotun}>
                <Text style={styles.buttonText}>Topli napitci</Text>
                <AntDesign name="down" size={18} color="#b4b5b8" style={styles.iconStyle}/>
              </View>
            </TouchableOpacity>
            {renderDropdown(proizvodiT, visible1)}
          </View>          
          <View style={styles.okvirBotuna}>
            <TouchableOpacity style={styles.button} onPress={() => toggleDropdown(2)}>
              <Image style={styles.slika} source={require('../assets/juice.jpg')} />
              <View style={styles.okvirTektBotun}>
                <Text style={styles.buttonText}>Bezalkoholna pića</Text>
                <AntDesign name="down" size={18} color="#b4b5b8" style={styles.iconStyle}/>
              </View>
            </TouchableOpacity>
            {renderDropdown(proizvodiB, visible2)}
          </View>
          <View style={styles.okvirBotuna}>
            <TouchableOpacity style={styles.button} onPress={() => toggleDropdown(3)}>
              <Image style={styles.slika} source={require('../assets/piva.jpg')} />
              <View style={styles.okvirTektBotun}>
                <Text style={styles.buttonText}>Pivo</Text>
                <AntDesign name="down" size={18} color="#b4b5b8" style={styles.iconStyle}/>
              </View>
            </TouchableOpacity>
            {renderDropdown(proizvodiP, visible3)}
          </View>
          <View style={styles.okvirBotuna}>
            <TouchableOpacity style={styles.button} onPress={() => toggleDropdown(6)}>
              <Image style={styles.slika} source={require('../assets/rakije.webp')} />
              <View style={styles.okvirTektBotun}>
                <Text style={styles.buttonText}>Žestoka pića domaća</Text>
                <AntDesign name="down" size={18} color="#b4b5b8" style={styles.iconStyle}/>
              </View>
            </TouchableOpacity>
            {renderDropdown(proizvodiZD, visible6)}
          </View>
          <View style={styles.okvirBotuna}>
            <TouchableOpacity style={styles.button} onPress={() => toggleDropdown(4)}>
              <Image style={styles.slika} source={require('../assets/viski.jpg')} />
              <View style={styles.okvirTektBotun}>
                <Text style={styles.buttonText}>Žestoka pića strana</Text>
                <AntDesign name="down" size={18} color="#b4b5b8" style={styles.iconStyle}/>
              </View>
            </TouchableOpacity>
            {renderDropdown(proizvodiZS, visible4)}
          </View>
          <View style={styles.okvirBotuna}>
            <TouchableOpacity style={styles.button} onPress={() => toggleDropdown(5)}>
              <Image style={styles.slika} source={require('../assets/vino.png')} />
              <View style={styles.okvirTektBotun}>
                <Text style={styles.buttonText}>Vina</Text> 
                <AntDesign name="down" size={18} color="#b4b5b8" style={styles.iconStyle}/>
              </View>
            </TouchableOpacity>
            {renderDropdown(proizvodiV, visible5)}
          </View>
        </ScrollView>
        <View style={styles.footer}>
        <TouchableOpacity onPress={() => {
          props.settrenutni(1);
        }}>
            <FontAwesome5 name="user-circle" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  ekran: {
    backgroundColor: '#103950',
    padding: 10,
    width: '100%',
    minWidth: 300,
    height: '100%'
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
});

export default HomePage;