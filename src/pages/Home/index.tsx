
import React from 'react';
import { Text, View } from 'react-native';
import { InputTask } from '../../components/IpuntTask';
import { styles } from './style';

export function Home() {
  return (
    <>
      <View style={styles.container} >
          <InputTask />
      </View>
    </>
  )
}