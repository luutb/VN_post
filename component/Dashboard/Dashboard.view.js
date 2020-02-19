import  { Alert, View, StyleSheet } from 'react-native';
import React,{ Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

import DemoHome from "../Header/Home.view"
import DemoMenu from '../Header/Menu.view';
class TabDashboard extends Component{
  
        render()
        {
            return( 
            <Tab.Navigator>
               
                <Tab.Screen name="Menu" component={DemoMenu}  options={{title: 'Welcome'}}>
                  
                </Tab.Screen>
                <Tab.Screen name="Home" component={DemoHome} />
            </Tab.Navigator>
            );
        }
   
}
export default class Dashboard extends Component{

    render()
    {
        return( 
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={TabDashboard} /> 
            </Drawer.Navigator>
       
            
        );
    }
}
const style = StyleSheet.create(
    {
        titleInput:{
            fontSize:30,
            fontFamily:'some_font',
            color: '#FF0000'

        }
    }
)