import { StyleSheet, View } from 'react-native';
import HomePage from './Ekrani/homePage';
import Login from './Ekrani/login';
import Kategorije from './Ekrani/kategorije';
import Uredi from './Ekrani/ekranUredi';
import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  const [trenutni, settrenutni] = useState(0);
  const [podaci, setPodaci] = useState(0);
  const [kolekcija, setKolekcija] = useState("");

  let sadrzaj = (
    <HomePage settrenutni={settrenutni} />
  );


  if (trenutni === 1) {
    sadrzaj = (
      <Login settrenutni={settrenutni}/>
    );
  } else if (trenutni === 2) {
    sadrzaj = (
      <Kategorije
        settrenutni={settrenutni}
        setpodaci={setPodaci}
        setkolekcija={setKolekcija}
      />
    );
  } else if (trenutni === 3) {
    sadrzaj = (
      <Uredi
        settrenutni={settrenutni}
        podaci={podaci}
        kolekcija={kolekcija}
      />
    );
  }

  return (
    <View style={styles.ekran}>
      {sadrzaj}
    </View>
  );
}

const styles = StyleSheet.create({
  ekran: {
    backgroundColor: '#103950',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
