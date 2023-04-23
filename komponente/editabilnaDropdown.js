import { StyleSheet, Text, SafeAreaView, FlatList, View, TouchableOpacity } from 'react-native';
import ModalUredi from './modal';
import React, { useState } from 'react';

const UrediDropdown = (props) => {
  const [unosVidljiv, postaviVidljivostUnosa]= useState(false);
  const [cijena, postaviCijenu] = useState("");
  const [mjera, postaviMjeru] = useState("");
  const [label, postaviLabelu] = useState("");
  var [kliknuti, setKliknuti] = useState()
 
  const odustaniModal = () => {
    postaviVidljivostUnosa(false)
  }
  
    return (
      <SafeAreaView style={styles.ekran}>
          <FlatList
            style={styles.listaOkvir}
            data={props.data}
            renderItem={({item}) => 
            <View >
              <TouchableOpacity style={styles.okvirTeksta} onPress={() => {postaviVidljivostUnosa(true); postaviCijenu(item.cijena); postaviLabelu(item.label); postaviMjeru(item.mjera); setKliknuti(item) }}>
              <Text style={styles.tekstLabela}>{item.label}</Text>
              <Text style={styles.tekstKolicina}>{item.mjera}</Text>
              <Text style={styles.tekstCijena}>{item.cijena}</Text>
              </TouchableOpacity>
            </View>
            }
          /> 

        <ModalUredi vidljiv={unosVidljiv} odustani={odustaniModal} label={label} mjera={mjera} cijena={cijena} kolekcija={props.kolekcija} podaci={kliknuti} />
        
      </SafeAreaView>
    );
  };

export default UrediDropdown;

const styles = StyleSheet.create({
  okvirTeksta: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    margin: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tekstLabela: {
    width: '45%',
    fontSize: 17,
    alignSelf: 'center'
  },
  tekstKolicina: {
    width: '15%',
    fontSize: 14,
    alignSelf: 'center'
  },
  listaOkvir: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  tekstCijena: {
    alignSelf: 'center',
    fontSize: 15
  },
});