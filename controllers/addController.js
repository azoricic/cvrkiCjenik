import {firebase} from '../config'

export function dodajProizvod(proizvod, kategorija){
    firebase.firestore()
        .collection(kategorija)
        .add(proizvod)
        .then((snapshot) => {
            proizvod.id = snapshot.id
            snapshot.set(proizvod)
        })
        .catch((error) => console.log(error))
}