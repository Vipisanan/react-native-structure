import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Alert ,Image} from 'react-native';
import {PRIMARY ,WHITE ,BLACK} from '../styles/colors';
import LogoWithText from '../resources/icons/logo-with-text.svg';
import { loginUser ,getTest } from '../services/userService';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:PRIMARY,
        marginBottom:40
    },
    inputView:{
        width:"80%",
        borderWidth: 1,
        borderRadius:4,
        borderColor:'#3F44511F',
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        color:BLACK,
    },
    forgot:{
        color:"white",
        fontSize:11
    },
    loginBtn:{
        width:"80%",
        backgroundColor:PRIMARY,
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    loginText:{
        color:"white"
    }
});

export default class Login extends Component {
    constructor() {
        super();
        this.state={
            email:'',
            password:''
        }
    }
    login = async ()=>{
        try{
            const data={
                email:this.state.email,
                password:this.state.password
            };
            console.log("before login api call Pressed");
            await loginUser(data);
            // await getTest();
            console.log("after call Pressed");
            Alert.alert(
                "Successfully",
                this.state.email,
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed su"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed in su") }
                ],
                { cancelable: false }
            );
        }catch(e){
            Alert.alert(
                "Error",
                this.state.email,
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        }

    }
    render() {
        return (
            <View style={styles.container}>
                    {/*<LogoWithText/>*/}
                <Image
                    source={{
                        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                    }}
                    style={{ width: 200, height: 200 }}
                />
                {/*<Text style={styles.logo}>INOMAS</Text>*/}
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email..."
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({email:text})}/>
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password..."
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({password:text})}/>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn}
                                  onPress={this.login}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.loginText}>Signup</Text>
                </TouchableOpacity>
            </View>
        );

    }
}
