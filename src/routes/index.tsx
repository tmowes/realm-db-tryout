import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Dashboard from '../pages/Dashboard'
// import Profile from '../pages/Profile'
const App = createStackNavigator()

const Routes: React.FC = () => (
  <>
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e38' },
      }}
    >
      <App.Screen name="Dashboard" component={Dashboard} />
      {/* <App.Screen name="Profile" component={Profile} /> */}
    </App.Navigator>
  </>
)

export default Routes
