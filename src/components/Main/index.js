import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import InputNota from './InputNota';

const CalculoMedia = () => {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularMedia = () => {
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);

    const media = (n1 + n2) / 2;

    setResultado(media.toFixed(1));
  };

  return (
    <View style={styles.container}>
      <InputNota
        placeholder="Digite a primeira nota"
        nota={nota1}
        onChangeNota={(valor) => setNota1(valor)}
      />
      <InputNota
        placeholder="Digite a segunda nota"
        nota={nota2}
        onChangeNota={(valor) => setNota2(valor)}
      />
      <Button title="Calcular média" onPress={calcularMedia} />
      {resultado ? <Text style={styles.resultado}>A média é: {resultado}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  resultado: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CalculoMedia;