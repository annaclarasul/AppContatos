import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {db} from './src/pages/sobre/firebaseConnection';

import Home from './src/pages/sobre';
import Sobre from './src/pages/sobre/cadastro';
import ContactDetails from './src/pages/sobre/ContactDetails';

const stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen 
        name= "Home"
        component={Home}
        options={{
          title: 'Lista de Contatos',
          headerStyle:{
            backgroundColor: "#B995F3"
          }
        }}
        />
        <stack.Screen
         name= "Sobre"
          component={Sobre}
          options={{
            title: 'Adicionar Contatos',
            headerStyle:{
              backgroundColor: "#B995F3"
            }
          }}/>

<stack.Screen
         name= "ContactDetails"
          component={ContactDetails}
          options={{
            title: 'Detalhes Contatos',
            headerStyle:{
              backgroundColor: "#B995F3"
            }
          }}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}
