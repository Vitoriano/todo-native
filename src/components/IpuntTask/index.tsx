
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import { styles } from './style';

export function InputTask() {

  return (
    <>
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
        />

        <TouchableOpacity
          style={styles.button}
        >
          <Text>+</Text>
        </TouchableOpacity>

      </View>
    
    </>
  )
}