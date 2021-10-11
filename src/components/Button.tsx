import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  handleAddSkill?: () => void
  title?: string;
}

export function Button({ handleAddSkill, title = 'Add', ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={.7} onPress={handleAddSkill} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  }
})
