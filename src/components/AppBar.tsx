import React from 'react'
import styled from 'styled-components/native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../shared/colors'

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`
const LogoText = styled.Text`
  color: ${colors.primary};
  font-size: 28px;
  font-weight: 700;
`
const IconsContainer = styled.View`
  flex-direction: row;
`
const Icon = styled.TouchableOpacity`
  height: 38px;
  width: 38px;
  border-radius: 19px;
  background-color: ${colors.divider};
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`

const AppBar = () => {
  return (
    <Container>
      <LogoText>facebook</LogoText>
      <IconsContainer>
        <Icon>
          <Feather name="search" size={24} color={colors.black} />
        </Icon>
        <Icon>
          <MaterialCommunityIcons
            name="facebook-messenger"
            color={colors.black}
            size={24}
          />
        </Icon>
      </IconsContainer>
    </Container>
  )
}

export default AppBar