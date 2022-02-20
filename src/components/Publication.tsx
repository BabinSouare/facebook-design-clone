import React from 'react'
import styled from 'styled-components/native'
import colors from '../shared/colors'
import userPicture from './../assets/images/userPicture.png'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { VerticalDivider } from '../shared/ui'

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 7px 10px;
  border-bottom-width: 0.7px;
  border-top-width: 0.7px;
  border-color: ${colors.divider};
`
const UserImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 5px;
`
const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#333',
})`
  font-size: 16px;
  color: ${colors.black};
`
const ActionContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 6px 10px;
`
const Action = styled.TouchableOpacity`
  flex-direction: row;
`
const ActionText = styled.Text`
  color: ${colors.black};
  font-weight: 600;
  font-size: 14px;
  margin-left: 5px;
`
const Publication = () => {
  return (
    <>
      <InputContainer>
        <UserImage source={userPicture} />
        <TextInput placeholder="Quoi de neuf ?" />
      </InputContainer>
      <ActionContainer>
        <Action>
          <Ionicons name="ios-videocam" color="#F44337" size={20} />
          <ActionText>En direct</ActionText>
        </Action>
        <VerticalDivider />
        <Action>
          <MaterialIcons
            name="photo-size-select-actual"
            color="#4CAF50"
            size={18}
          />
          <ActionText>Photo</ActionText>
        </Action>
        <VerticalDivider />
        <Action>
          <MaterialCommunityIcons name="video-plus" color="#E141FC" size={20} />
          <ActionText>Salon</ActionText>
        </Action>
      </ActionContainer>
    </>
  )
}

export default Publication
