import RegisterView from "./Register.view";
import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';

export default class RegisterController extends Component
{

    constructor()
    {
        super();
        this.state={
            test:"abc"
        }
    }
    render()
    {
        return(
               <RegisterView
               data ={this.state.test}
               onRegister = {this.onRegister.bind(this)}
               > 
               </RegisterView>
        );
    }
    onRegister()
    {
        Alert.alert("hihiu")
    }
}