import React from "react";
import { createNativeStackNavigator} from "@react-navigation/native-stack";

import { Home } from "../screens/home/Home"; 
import { Sobre } from "../screens/Sobre/sobre";

const Stack = createNativeStackNavigator();

export function Seila(){

    return(

        <Stack.Navigator initialRouteName = "Home">
                
            <Stack.Screen name="Home" component={Home}/>

            <Stack.Screen name="Sobre" component={Sobre}/>
          
        </Stack.Navigator>
    );
}
