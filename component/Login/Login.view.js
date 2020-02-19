import React, { Component } from 'react';
import { Text, View, TextInput, Button, StyleSheet, Alert } from 'react-native';
export default class LoginView extends Component
{
constructor()
{
  super()
  this.state={
    username:'',
    password:'',
    abc:1
  }
}
// componentWillMount=()=>{
 
//   setTimeout(()=>{
//     this.setState({abc:2})
//   }, 5000);


// }

render()
{
    return(
      <View style ={style.form}>
        <TextInput placeholder="Username" style={style.input}
                    onChangeText={(text) => this.setState({username:text})}
                    ></TextInput>

        <TextInput placeholder="Password" style={style.input}
                   onChangeText={(text) => this.setState({password:text})}
                   secureTextEntry={true}
        ></TextInput>

       
        <View  style ={style.submit}>
            <Button  
                   title="Login" onPress={this.setonClick.bind(this)}></Button>
          </View>
       {/* {
        (this.state.abc==1)?<Text>qweqwe</Text>:<Text>123</Text>
       } */}
      </View>
      
    );
}    
setonClick()
{
  var {username,password} = this.state;

 
  this.props.onLogin(username,password)
 
}


}
const style = StyleSheet.create(
  {
    input:{
      marginHorizontal:10,
      fontSize: 20,
       
      height:50,
     
      borderWidth: 1,
      borderColor: '#d6d7da',
    },
    submit:{ 
      padding:10,
      flexDirection:"row",
      justifyContent:"center"
    

    },
    form:{
      flex:1,
     
      flexDirection:"column",
      alignContent: "center",
      justifyContent: "center",
    },
    bg:{
      backgroundColor:"#ff0000"
    }
    
  }
);