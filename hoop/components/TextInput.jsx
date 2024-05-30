import React from 'react'
import { TextInput } from 'react-native-paper'

export const InputText = ({style,placeholder,placeholderTextColor}) => {
  return (
    <TextInput
    style={style}
    placeholder={placeholder}
    placeholderTextColor={placeholderTextColor}
  />
  )
}

export default InputText