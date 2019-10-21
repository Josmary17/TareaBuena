import React from 'react';

import {
    View,
    Text,
    Button,
    TextInput,
    
}from 'react-native'

const Login = (access) => {

    const {cambiarPantalla,cambiarText, nombre} = access;

    return (
        <View>
            <Text> Login </Text>
            <TextInput 
                onChangeText={cambiarText}
                defaultValue = {nombre}
            />

            <Button title = 'Ir a Inicio'
                     onPress ={cambiarPantalla}
             />
        </View>

    );
};

export default Login;