import { StyleSheet, Text, SafeAreaView, FlatList, View } from 'react-native';

const DropDownLista = (props) => {
    return (
      <SafeAreaView style={styles.ekran}>
        <FlatList
          style={styles.listaOkvir}
          data={props.data}
          renderItem={({item}) => 
          <View style={styles.okvirTeksta}>
            <Text style={styles.tekstLabela}>{item.label}</Text>
            <Text style={styles.tekstKolicina}>{item.mjera}</Text>
            <Text style={styles.tekstCijena}>{item.cijena}</Text>
          </View>
          }
        />
      </SafeAreaView>
    );
  };

export default DropDownLista;

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
    backgroundColor: '#ded4ce',
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ekran: {
    padding: 4.9,
    paddingTop: 0, 
    marginTop: -6
  },
  tekstCijena: {
    alignSelf: 'center',
    fontSize: 15
  }
});