import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, text }) => {

    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    );

};

const styles = {
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#FFFFFF',
        borderColor: '#007AFF',
        borderRadius: 5,
        borderWidth: 1,
        flex: 1,
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007AFF',
        fontSize: 16,
        fontWeight: '600',
        paddingBottom: 10,
        paddingTop: 10
    }
};

export { Button };