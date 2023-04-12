import React from 'react';
import { View, Text } from 'react-native';

const FibonacciSequence = ({ numElements }) => {
  const fibonacci = [0, 1];
  const colors = [];
  let scale = 10;
  for (let i = 2; i < numElements; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    scale += 2;
    colors.push(`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`);
  }

  return (
    <View>
      {fibonacci.map((num, index) => (
        <Text key={index} style={{ color: colors[index], fontSize: scale }}>
          {num}
        </Text>
      ))}
    </View>
  );
};

export default FibonacciSequence;