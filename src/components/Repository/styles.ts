import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import FaIcon from 'react-native-vector-icons/FontAwesome'

export const Container = styled(LinearGradient).attrs({
  colors: ['#f4ede8', '#6bd4c1'],
  start: { x: 0.5, y: 0.5 },
  end: { x: 3, y: 2 },
})`
  padding: 16px;
  margin: 8px 0;
  border-radius: 8px;
`

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #312e38;
`

export const Description = styled.Text.attrs({
  numberOfLines: 3,
})`
  margin-top: 8px;
  line-height: 16px;
  color: #312e3888;
`
export const Stats = styled.View`
  flex-direction: row;
  margin-top: 12px;
`
export const Stat = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 12px;
`

export const StatCount = styled.Text`
  margin-left: 8px;
`
export const Refresh = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 8px;
  align-items: center;
`
export const RefreshText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #6bd4c1;
  margin-left: 8px;
`

export const StarsIcon = styled(FaIcon).attrs({
  name: 'star',
  size: 16,
  color: '#312e38',
})``
export const ForksIcon = styled(FaIcon).attrs({
  name: 'code-fork',
  size: 16,
  color: '#312e38',
})``
export const RefreshIcon = styled(FaIcon).attrs({
  name: 'refresh',
  size: 18,
  color: '#6bd4c1',
})``
