import React from 'react'
import styled from 'styled-components/native'
import colors from '../shared/colors'
import Avatar from './Avatar'
import posts from '../data/posts'
import { ScrollView } from 'react-native'

const Container = styled.View`
  padding-bottom: 10px;
`
const Header = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.black};
  padding: 10px;
`
const Button = styled.TouchableOpacity`
  padding: 10px;
  background-color: #ebf3fc;
  border-radius: 10px;
  margin-left: 10px;
`
const ButtonText = styled.Text`
  color: ${colors.primary};
  font-size: 16px;
  font-weight: 600;
`
const AvatarContainer = styled.TouchableOpacity`
  margin-left: 7px;
`
const Rooms = () => {
  return (
    <Container>
      <Header>Salons audio et vidéo</Header>
      <ScrollView
        contentContainerStyle={{ alignItems: 'center' }}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <Button>
          <ButtonText>Créer un salon</ButtonText>
        </Button>
        {posts.map((post, index) => (
          <AvatarContainer key={`room-avatar-${index}`}>
            <Avatar isOnline={post.user.online} image={post.user?.picture} />
          </AvatarContainer>
        ))}
      </ScrollView>
    </Container>
  )
}

export default Rooms
