import React, { Component } from 'react';
import { View } from 'react-native';

import firebase from 'firebase';

import { Button, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = {
        loggedIn: null
    }

    componentDidMount() {

        firebase.initializeApp({
            apiKey: 'AIzaSyB6RtD6ddEqPULNKad9kQVC1t0pSDnuUAM',
            authDomain: 'auth-30271.firebaseapp.com',
            databaseURL: 'https://auth-30271.firebaseio.com',
            projectId: 'auth-30271',
            storageBucket: 'auth-30271.appspot.com',
            messagingSenderId: '972041748126'
        });

        firebase.auth().onAuthStateChanged((user) => this.setState({ loggedIn: (user != null) }));

    }

    onPressLogout() {

        firebase.auth().signOut();

    }

    render() {

        return (
            <View>
                <Header headerText="Authentication" />
                <View style={{ height: 50, padding: 5 }}>{this.renderContent()}</View>
            </View>
        );

    }

    renderContent() {

        switch (this.state.loggedIn) {

            case true:
                return <Button onPress={this.onPressLogout.bind(this)} text="Log Out" />;

            case false:
                return <LoginForm />;

            default:
                return <Spinner size="large" style={{ paddingTop: 20 }} />;

        }   

    }

}

export default App;