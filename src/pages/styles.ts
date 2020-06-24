/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import { FlatList } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'

export const Container = styled(LinearGradient).attrs({
  colors: ['#312e38', '#6bd4c1'],
  start: { x: 0, y: 0.5 },
  end: { x: 3, y: 2 },
})`
  flex: 1;
  padding-top: 16px;
`
export const Title = styled.Text`
  font-size: 32px;
  color: #f4ede8;
  padding: 0 16px;
`
export const Form = styled.View`
  flex-direction: row;
  margin-top: 8px;
  padding: 0 16px;
`
export const Input = styled.TextInput.attrs({
  autoCapitalize: 'none',
  autoCorrect: false,
  placeholder: 'Search',
  placeholderTextColor: '#312e38',
})`
  flex: 1;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;
  color: #312e38;
  background-color: #f4ede8;
  border: 2px solid ${props => (props.error ? '#ff7272' : '#f4ede8')};
`

export const AddIcon = styled(Icon).attrs({
  name: 'plus',
  size: 24,
  color: '#f4ede8',
})``

export const Submit = styled(RectButton)`
  background: #6bd4c1;
  margin-left: 16px;
  justify-content: center;
  border-radius: 8px;
  padding: 0 16px;
`
export const ListView = styled.View`
  margin-bottom: 200px;
`
export const List = styled(FlatList as new () => FlatList<any>).attrs({
  keyboardShouldPersistTaps: 'handled',
  contentContainerStyle: { paddingHorizontal: 16 },
  showsVerticalScrollIndicator: false,
})`
  margin-top: 24px;
`
