/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import { ScrollView, StatusBar } from 'react-native'
import styled from 'styled-components/native'
import colors from './shared/colors'
import AppBar from './components/AppBar'
import Publication from './components/Publication'
import Rooms from './components/Rooms'
import Stories from './components/Stories'
import Posts from './components/Posts'
import { HorizontalDivider } from './shared/ui'

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AppBar />
          <Publication />
          <HorizontalDivider />
          <Rooms />
          <HorizontalDivider />
          <Stories />
          <HorizontalDivider />
          <Posts />
        </ScrollView>
      </Container>
    </>
  )
}

export default App
