import React from 'react'
import styled from 'styled-components/native'
import { StyleProp, ViewStyle } from 'react-native'
import colors from '../shared/colors'

const Container = styled.View`
  width: 38px;
  height: 38px;
`
const Image = styled.Image<{alreadySeenStory?: boolean, isStory?: boolean}>`
  width: 38px;
  height: 38px;
  border-radius: 19px;
  ${({alreadySeenStory, isStory}) => isStory && `
    border-width: 3px;
    border-color: ${alreadySeenStory ? colors.secondary : colors.primary};
  `}
`
const ActiveIndicator = styled.View`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  bottom: -2px;
  right: -2px;
  background-color: #4CAF50;
  border-width: 2px;
  border-color: ${colors.white};
`
interface AvatarProps {
  image: any
  style?: StyleProp<ViewStyle>
  isStory?: boolean
  alreadySeenStory?: boolean
  isOnline?: boolean
}

const Avatar = ({image, style, isStory, alreadySeenStory, isOnline}: AvatarProps) => {
  return (
    <Container style={style}>
      <Image isStory={isStory} alreadySeenStory={alreadySeenStory} source={image} />
      {!isStory && isOnline && <ActiveIndicator />}
    </Container>
  )
}

export default Avatar