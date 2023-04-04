import React from "react";
import {View, Text, TextInput, Button} from "react-native";

export default function Form(){
    return(
    //conteudo do formulario
        <View>
            <View><Text>Nota 1</Text>
                <TextInput placeholder="5.0" keyboardType="numeric"/>
                <Text>Nota 2</Text>
                <TextInput placeholder="5.0" keyboardType="numeric"/>
                <Button title="Calcular Média"/>
            </View>
        </View>
    );
   }