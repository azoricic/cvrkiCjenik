import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, LogBox } from "react-native";
import DropDownLista from "../komponente/dropDownLista";
import React, { useState, useEffect } from 'react';
import { bezalkoholnaPica } from "../Data/podaci";
import { topliNapitci } from "../Data/podaci";
import { piva } from "../Data/podaci";
import { vina } from "../Data/podaci";
import { zestokaPica } from "../Data/podaci";
import { AntDesign } from '@expo/vector-icons'; 

const HomePage = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);

  const toggleDropdown = (id) => {
    if (id ==1){
      setVisible1(!visible1);
      setVisible2(false);
      setVisible3(false);
      setVisible4(false);
      setVisible5(false);
    }
    if (id ==2){
      setVisible2(!visible2);
      setVisible1(false);
      setVisible3(false);
      setVisible4(false);
      setVisible5(false);
    }
    if (id ==3){
      setVisible3(!visible3);
      setVisible2(false);
      setVisible1(false);
      setVisible4(false);
      setVisible5(false);
    }
    if (id ==4){
      setVisible4(!visible4);
      setVisible2(false);
      setVisible3(false);
      setVisible1(false);
      setVisible5(false);
    }
    if (id ==5){
      setVisible5(!visible5);
      setVisible2(false);
      setVisible3(false);
      setVisible4(false);
      setVisible1(false);
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
    
  return (
      <View style={styles.ekran}>
        <View style={styles.okvirLogo}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
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
            {renderDropdown(topliNapitci, visible1)}
          </View>          
          <View style={styles.okvirBotuna}>
            <TouchableOpacity style={styles.button} onPress={() => toggleDropdown(2)}>
              <Image style={styles.slika} source={require('../assets/juice.jpg')} />
              <View style={styles.okvirTektBotun}>
                <Text style={styles.buttonText}>Bezalkoholna Pića</Text>
                <AntDesign name="down" size={18} color="#b4b5b8" style={styles.iconStyle}/>
              </View>
            </TouchableOpacity>
            {renderDropdown(bezalkoholnaPica, visible2)}
          </View>
          <View style={styles.okvirBotuna}>
            <TouchableOpacity style={styles.button} onPress={() => toggleDropdown(3)}>
              <Image style={styles.slika} source={require('../assets/piva.jpg')} />
              <View style={styles.okvirTektBotun}>
                <Text style={styles.buttonText}>Pivo</Text>
                <AntDesign name="down" size={18} color="#b4b5b8" style={styles.iconStyle}/>
              </View>
            </TouchableOpacity>
            {renderDropdown(piva, visible3)}
          </View>
          <View style={styles.okvirBotuna}>
            <TouchableOpacity style={styles.button} onPress={() => toggleDropdown(4)}>
              <Image style={styles.slika} source={require('../assets/viski.jpg')} />
              <View style={styles.okvirTektBotun}>
                <Text style={styles.buttonText}>Žestoka Pića</Text>
                <AntDesign name="down" size={18} color="#b4b5b8" style={styles.iconStyle}/>
              </View>
            </TouchableOpacity>
            {renderDropdown(zestokaPica, visible4)}
          </View>
          <View style={styles.okvirBotuna}>
            <TouchableOpacity style={styles.button} onPress={() => toggleDropdown(5)}>
              <Image style={styles.slika} source={require('../assets/vino.png')} />
              <View style={styles.tektOkvirBotun}>
                <Text style={styles.buttonText}>Vina</Text> 
                <AntDesign name="down" size={18} color="#b4b5b8" style={styles.iconStyle}/>
              </View>
            </TouchableOpacity>
            {renderDropdown(vina, visible5)}
          </View>
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  ekran: {
    backgroundColor: '#c7b9b1',
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
    height: 100,
    marginBottom: 20,
    marginTop: 20,
  },
  okvirBotuna:{
    marginBottom: 3
  },
 

});

export default HomePage;