/* eslint-disable react/prop-types */
import React from 'react'
import {
  Container,
  Name,
  Description,
  Stats,
  Stat,
  StarsIcon,
  StatCount,
  ForksIcon,
  Refresh,
  RefreshIcon,
  RefreshText,
} from './styles'

const Repository: React.FC = ({ data, onRefresh }) => {
  return (
    <Container>
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>
      <Stats>
        <Stat>
          <StarsIcon />
          <StatCount>{data.stars}</StatCount>
        </Stat>
        <Stat>
          <ForksIcon />
          <StatCount>{data.forks}</StatCount>
        </Stat>
      </Stats>
      <Refresh onRefresh={onRefresh}>
        <RefreshIcon />
        <RefreshText>ATUALIZAR</RefreshText>
      </Refresh>
    </Container>
  )
}

export default Repository
