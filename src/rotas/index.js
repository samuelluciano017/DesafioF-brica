import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Seila } from './routes';


export function Controlar(){
    return(
        <NavigationContainer>
            <Seila/>
        </NavigationContainer>
    );
}