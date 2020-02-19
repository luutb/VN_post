import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import LoginView from './Login.view';
import testApi from '../LoginApi/testApi'



export default class LoginController extends Component
{

    constructor()
    {
        super();
        this.state={
            test:"abc"
        }
        
    }
    componentDidMount(){
        window.navigation = this.props.navigation;
    }
    render()
    {
        return(
               <LoginView
               data ={this.state.test}
               onLogin = {this.onLogin.bind(this)}
               > 
               </LoginView>
        );
    }
    onLogin(username, password)
    
    {
        
        // testApi.testApi({username,password}).then((response)=>{

            
        //     console.log(response);
        // })

        if(username=="admin" && password =="admin")
        {
            this.state.navigation.navigate("Register");
        }
    }
    
}