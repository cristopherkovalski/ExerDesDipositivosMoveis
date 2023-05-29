import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import InputNota from './InputNota';
import db from '../Db';
import RegistrosAlunos from '../RegistroAlunos';

const CalculoMedia = () => {
  const [nome, setNome] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularMedia = () => {
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);

    const media = (n1 + n2) / 2;

    setResultado(media.toFixed(1));
  };

  const salvarDados = async () => {
    try {
      await db.transaction(async (tx) => {
        await tx.executeSql(
          'INSERT INTO alunos (nome, nota1, nota2) VALUES (?, ?, ?)',
          [nome, nota1, nota2]
        );
        console.log('Dados salvos com sucesso.');
        setNome('');
        setNota1('');
        setNota2('');
      });
    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text><h2>Nome do aluno</h2></Text>
      <InputNota
        placeholder="Digite o nome"
        nota={nome}
        onChangeNota={(valor) => setNome(valor)}
      />
      <Text><h2>Nota 01</h2></Text>
      <InputNota
        placeholder="Digite a primeira nota"
        nota={nota1}
        onChangeNota={(valor) => setNota1(valor)}
      />
      <Text><h2>Nota 02</h2></Text>
      <InputNota
        placeholder="Digite a segunda nota"
        nota={nota2}
        onChangeNota={(valor) => setNota2(valor)}
      />
      <View style={styles.buttonContainer}>
      <Button title="Calcular média" onPress={calcularMedia}  />
      </View>
      <View style={styles.buttonContainer}>
      <Button title="Salvar Dados" onPress={salvarDados} color="#00FF00" />
      </View>
      {resultado ? <Text style={styles.resultado}>A média é: {resultado}</Text> : null}
      <RegistrosAlunos />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  resultado: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: '10%',
  },
});

export default CalculoMedia;