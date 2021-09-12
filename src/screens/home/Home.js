
import React, {useState} from "react";
import {View, Text, TextInput, ImageBackground, TouchableOpacity, Button} from 'react-native';
import { styles } from '../style';

const image = '../background.jpg';
const eu = '../Eu.jpg';

export function Home({navigation}){

    const [text, setText] = useState('');   

    return(
    <>
        <View>
            <ImageBackground source={require(image)} style={styles.fundo}>  
                
                        <Text style={styles.texto} > Bem Vindo ao meu App </Text>                 
                       
                        <TextInput onChangeText={setText} style={styles.input} placeholder="Digite algo"></TextInput>
                        <Text style={styles.texto3}> Você Digitou...{text}</Text>
                       
                        <ImageBackground source={require(eu)} style={styles.eu}>
                        </ImageBackground>        


                        <View style={styles.button}>         
                        
                        <Button title="Sobre mim"
                            onPress={() =>{navigation.navigate("Sobre",{ 
                            itemId: 86,
                            otherPararm:"aaaaa"} )} }>
                        </Button>        
                        
                        </View>     
            </ImageBackground>  
        </View>      
        

        
            

</>
    );
}