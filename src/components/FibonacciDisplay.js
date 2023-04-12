import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import FibonacciSequence from './FibonacciSequence';

const FibonacciDisplay = () => {
  const [numElements, setNumElements] = useState('');

  const handleChange = (text) => {
    setNumElements(text);
  };

  const handleSubmit = () => {
    const num = parseInt(numElements, 10);
    if (num > 0) {
      setNumElements(num);
    }
  };

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 1 }}
          placeholder="Digite o número de elementos"
          keyboardType="numeric"
          value={numElements}
          onChangeText={handleChange}
          onSubmitEditing={handleSubmit}
        />
        <Button title="Enviar" onPress={handleSubmit} />
      </View>
      <FibonacciSequence numElements={numElements} />
    </View>
  );
};

export default FibonacciDisplay;