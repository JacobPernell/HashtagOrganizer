import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';

export default function App() {
    const [textArea, setTextArea] = useState('');
    const [testCopy, setTestCopy] = useState('');

    return (
        <View style={styles.container}>
            <Text>Enter hashtags you want to save and reuse, and press the button to copy.</Text>

            <TextInput style={styles.textInput} value={textArea} onChangeText={setTextArea}></TextInput>

            <Pressable
                onPress={() => {
                    setTestCopy('Copied!');
                }}
                style={styles.button}
            >
                <Text>Yuhhhh</Text>
            </Pressable>
            <Text>{testCopy}</Text>

            <Text>Testing text updating: {textArea}</Text>

            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        marginLeft: 20,
        justifyContent: 'center',
    },
    button: {
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
    },
    textInput: {
        marginTop: 10,
        marginBottom: 10,
        borderColor: 'black',
        borderWidth: 1,
        width: '100%',
    },
});
