import { useState } from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  Pressable,
  StyleSheet,
  View,
  TextInput,ToastAndroid
} from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  return (
    <SafeAreaView style={[styles.screen]}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('./images/LIS.png')} />
      </View>
      <View style={styles.formulary}>
        <Text style={[styles.title]}>Tu Nombre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe Aquí"
          value={nombre}
          onChangeText={setNombre}
        />
        <View style={styles.campoMensaje}>
          <Text style={[styles.mensaje, styles.title]}>{mensaje}</Text>
        </View>
        <Pressable
          style={styles.btnPressable}
          onPress={() => {
            let nuevomensaje = `Hola ${nombre} bienvenido al curso DDA`;
            if (!nombre) {
              ToastAndroid.show('Debes ingresar tu nombre', ToastAndroid.SHORT);
              nuevomensaje = '';
            }
            setMensaje(nuevomensaje);
          }}>
          <Text style={styles.btnText}>Saludar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  formulary: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
  },
  screen: {
    flex: 1,
    backgroundColor: '#FFFFF',
  },
  btnPressable: {
    backgroundColor: '#0000FF',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  btnText: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center',
  },
  campoMensaje: {
    marginTop: 20,
    marginBottom: 60,
    marginHorizontal: 10,
  },
  input: {
    backgroundColor: '#DDDDDD',
    color: '#222222',
    fontSize: 30,
    padding: 12,
    borderRadius: 10,
  },
  mensaje: {
    textAlign: 'center',
  },
  title: {
    fontSize: 30,
    color: '#000',
  },
});

