import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const InputNota = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={props.placeholder}
        keyboardType="numeric"
        value={props.nota}
        onChangeText={(valor) => props.onChangeNota(valor)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
  },
});

export default InputNota;