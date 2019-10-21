import React from 'react';

import {
 Text,
 View,
 Button,

} from 'react-native';

const Inicio = (access) => {
    const {cambiarPantalla, nombre} = access;

    return (
    <View>
        <Text> Inicio </Text>
        <Button
           title = 'ir a login'
           onPress = {cambiarPantalla}

        />
         <Text>{nombre} </Text>
    </View>
   
);

};

export default Inicio;