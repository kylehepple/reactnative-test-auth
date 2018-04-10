import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({
    autoCorrect = false,
    label = 'Label',
    onChangeText = () => console.log('onChangeText has not been defined'),
    placeholder = '',
    secureTextEntry = false,
    value = ''
}) => {

    const { containerStyle, inputStyle, labelStyle } = styles;

    return (
        <View style={containerStyle}>

            <Text style={labelStyle}>
                {label}
            </Text>

            <TextInput
                autoCorrect={autoCorrect}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                style={inputStyle}
                value={value}
            />

        </View>
    );

};

const styles = {
    containerStyle: {
        alignItems: 'center',
        height: 40,
        flex: 1,
        flexDirection: 'row'
    },
    inputStyle: {
        color: '#000000',
        flex: 2,
        fontSize: 18,
        lineHeight: 23,
        paddingLeft: 5,
        paddingRight: 5
    },
    labelStyle: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 20
    }
};

export { Input };