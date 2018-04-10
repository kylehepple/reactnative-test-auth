import React, { Component } from 'react';
import { Text } from 'react-native';

import firebase from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {

    state = {
        email: '',
        error: '',
        loading: false,
        password: ''
    }

    async createNewUser(email, password) {

        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            this.onLoginSuccess();
        } catch (err) {
            this.setState({  
                error: 'Authentication failed',
                loading: false
            });
        }

    }

    async onPressLogin() {

        const { email, password } = this.state;

        this.setState({
            error: '',
            loading: true
        });

        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            this.onLoginSuccess();
        } catch (e) {
            this.createNewUser(email, password);
        }

    }

    onLoginSuccess() {

        this.setState({
            email: '',
            error: '',
            loading: false,
            password: ''
        });

    }

    render() {

        const { errorTextStyle } = styles;

        return (
            <Card>
                <CardSection> 
                    <Input
                        label={'Email'}
                        onChangeText={email => this.setState({ email })}
                        placeholder={'example@abc.com'}
                        value={this.state.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label={'Password'}
                        onChangeText={password => this.setState({ password })}
                        placeholder={'password'}
                        secureTextEntry
                        value={this.state.password} 
                    /> 
                </CardSection>

                <Text style={errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );

    }

    renderButton() {

        if (this.state.loading) {
            return <Spinner />;
        }

        return (
            <Button 
                onPress={this.onPressLogin.bind(this)} 
                text="Log In" 
            />
        );

    }

}
const styles = {
    errorTextStyle: {
        alignSelf: 'center',
        color: 'red',
        fontSize: 20
    }
};

export default LoginForm;