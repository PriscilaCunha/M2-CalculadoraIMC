import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

const calculate = (weight, height) => {
  const result = (
    (parseFloat(weight) * 10000) /
    (parseFloat(height) * parseFloat(height))
  ).toFixed(2);

  return  result;
};

const App = () => {

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [output, setOutput] = useState('');
  const [category, setCategory] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora IMC</Text>

      <TextInput style={styles.input} onChangeText={setHeight} placeholder='Altura em MM' />

      <TextInput style={styles.input} onChangeText={setWeight} placeholder='Peso em KG' />

      <TouchableOpacity 
        style={styles.button}
        onPress={ () => {
          const tempOutput = calculate(weight, height);
          setOutput(tempOutput);
          if(tempOutput <= 18.5) { 
            setCategory('Magro')
          } else if(tempOutput > 18.5 && tempOutput < 25) { 
            setCategory('Normal')
          } else if(tempOutput > 25 && tempOutput < 30) { 
            setCategory('Sobrepeso')
          } else if(tempOutput >= 30) { 
            setCategory('Obeso')
          } else {
            setCategory('Indefinido')
          }
        }}
      >
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.output}>{output}</Text>
      <Text style={styles.resultText}>{category}</Text>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    margin: 15,
  },
  button: {
    backgroundColor: '#ff6666',
    padding: 10,
    margin: 15,
    height: 40,
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: 30,
    color: 'blue'
  },
  output: {
    textAlign: 'center',
    fontSize: 30,
  },
  resultText: {
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    color: 'blue',
    fontSize: 30,
  }
});
