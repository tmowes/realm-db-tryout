/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { useNavigation } from '@react-navigation/native'
import { Keyboard } from 'react-native'
import api from '../services/api'
import getRealm from '../services/realm'
import Repository from '../components/Repository'
import {
  Container,
  Title,
  Form,
  Input,
  Submit,
  AddIcon,
  ListView,
  List,
} from './styles'

const Dashboard: React.FC = () => {
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    async function loadRepositories() {
      const realm = await getRealm()
      const data = realm.objects('Repository').sorted('stars', true)
      setRepositories(data)
    }
    loadRepositories()
  }, [])

  async function saveRepository(repository) {
    const repoData = {
      id: repository.id,
      name: repository.name,
      fullName: repository.full_name,
      description: repository.description,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
    }
    const realm = await getRealm()
    realm.write(() => {
      realm.create('Repository', repoData, 'modified')
    })
    return repoData
  }

  async function handleSubmit() {
    try {
      const { data } = await api.get(`/repos/${input}`)
      await saveRepository(data)
      console.log('FOI CACETE', data)
      setInput('')
      setError(false)
      Keyboard.dismiss()
    } catch (err) {
      console.log('ErrO', err)
      setError(true)
    }
  }

  async function handleRefreshRepository(repository) {
    const { data } = await api.get(`/repos/${repository.fullName}`)
    const repoData = await saveRepository(data)
    setRepositories(
      repositories.map(repo => (repo.id === repoData.id ? data : repo)),
    )
  }

  return (
    <Container>
      <SafeAreaView>
        <Title>REALM DB</Title>
        <Form>
          <Input value={input} onChangeText={setInput} error={error} />
          <Submit onPress={handleSubmit}>
            <AddIcon />
          </Submit>
        </Form>
        <ListView>
          <List
            data={repositories}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Repository
                data={item}
                onRefresh={() => handleRefreshRepository(item)}
              />
            )}
          />
        </ListView>
      </SafeAreaView>
    </Container>
  )
}

export default Dashboard
