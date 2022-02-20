import React from 'react'
import styled from 'styled-components/native'
import colors from '../shared/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import userPicture from './../assets/images/userPicture.png'
import posts from '../data/posts'
import Avatar from './Avatar'

const Container = styled.ScrollView`
  padding: 10px 0;
`
const Story = styled.TouchableOpacity`
  width: 120px;
  height: 200px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${colors.secondary};
  margin-left: 10px;
`
const MusicStory = styled.View`
  background-color: #74d8d0;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`
const MusicIcon = styled.View`
  height: 50px;
  width: 50px;
  background-color: ${colors.white};
  border-radius: 25px;
  margin-bottom: 5px;
  box-shadow: 1px 0 15px rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`
const MusicText = styled.Text`
  color: ${colors.white};
  text-shadow: 1px 0 10px rgba(0, 0, 0, 0.4);
  font-weight: bold;
  font-size: 15px;
`
const CreateStoryImage = styled.Image`
  width: 100%;
  height: 60%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`
const CreateStoryButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: -20px;
`
const CreateStoryButton = styled.View`
  width: 40px;
  height: 40px;
  background-color: ${colors.primary};
  border-radius: 20px;
  border-width: 3px;
  border-color: ${colors.white};
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`
const CreateStoryText = styled.Text`
  color: ${colors.black};
  width: 70px;
  text-align: center;
  font-weight: 600;
`
const StoryImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`
const StoryAvatar = styled(Avatar)`
  position: absolute;
  top: 10px;
  left: 10px;
`
const StoryCover = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`
const Username = styled.Text`
  position: absolute;
  bottom: 4px;
  left: 4px;
  color: ${colors.white};
  font-weight: 700;
`
const Stories = () => {
  return (
    <Container horizontal showsHorizontalScrollIndicator={false}>
      <Story>
        <MusicStory>
          <MusicIcon>
            <Fontisto name="music-note" size={26} color={colors.black} />
          </MusicIcon>
          <MusicText>Musique</MusicText>
        </MusicStory>
      </Story>
      <Story>
        <CreateStoryImage source={userPicture} />
        <CreateStoryButtonContainer>
          <CreateStoryButton>
            <MaterialCommunityIcons name="plus" size={32} color="#fff" />
          </CreateStoryButton>
          <CreateStoryText>Créer une story</CreateStoryText>
        </CreateStoryButtonContainer>
      </Story>

      {posts
        .filter(post => post.user.hasStory)
        .map(({ user }, index) => (
          <Story key={`story-${index}`}>
            <StoryImage source={user?.picture} />
            <StoryCover />
            <StoryAvatar
              alreadySeenStory={user.alreadySeenStory}
              isStory={user.hasStory}
              image={user?.picture}
            />
            <Username>{user.username}</Username>
          </Story>
        ))}
    </Container>
  )
}

export default Stories
