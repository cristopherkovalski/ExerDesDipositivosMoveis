import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import db from './Db';

const RegistrosAlunos = () => {
  const [registros, setRegistros] = useState([]);

  const exibirRegistros = () => {
    console.log('Executando consulta SQL...');
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM alunos', [], (_, { rows }) => {
        const data = [];
        for (let i = 0; i < rows.length; i++) {
          data.push(rows.item(i));
        }
        console.log('Registros obtidos:', data);
        setRegistros(data);
      });
    });
  };

  const renderItem = ({ item }) => (
    <Text style={{ marginBottom: 10 }}>
      Aluno: {item.nome}, Média: {((item.nota1 + item.nota2) / 2).toFixed(1)}
    </Text>
  );

  return (
    <View>
      <Button title="Exibir Registros" onPress={exibirRegistros} color="#40e0d0"  />
      <FlatList
        data={registros}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default RegistrosAlunos;
