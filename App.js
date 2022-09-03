import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';
import React, {useState} from 'react';
 
export default function App() {

  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
          style={{width:
            200,
            borderColor:'gray',
            borderWidth:1
            }}
          onChangeText={text => setText(text)}
          value={text}
      />
      <Button title="Press me" onPress={() => Alert.alert('You typed: ' + text)}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
