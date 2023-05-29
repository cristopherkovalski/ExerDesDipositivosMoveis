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
    width: 250,
    height: 40,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
  },
});

export default InputNota;