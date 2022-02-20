import React from 'react'
import styled from 'styled-components/native'
import posts from '../data/posts'
import Avatar from './Avatar'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import colors from '../shared/colors'
import { HorizontalDivider } from '../shared/ui'
import { TouchableOpacity, Text, Dimensions, TextInput } from 'react-native'
import nawonzon from './../assets/images/userPicture.png'

const imageHeight = Dimensions.get('window').height * 0.7

const Container = styled.View``
const Post = styled.View``
const PostHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  padding-bottom: 10px;
`
const InfoUserContainer = styled.View`
  flex-direction: row;
  align-items: center;
`
const Username = styled.Text`
  font-weight: bold;
  color: ${colors.black};
`
const Subinfo = styled.View`
  margin-left: 10px;
`
const OptionsContainer = styled.View`
  flex-direction: row;
`
const PostContent = styled.Text`
  color: rgba(0, 0, 0, 0.8);
  padding: 0 10px 10px 10px;
`
const PostImage = styled.Image`
  width: 100%;
  height: ${imageHeight}px;
  margin-bottom: 10px;
`
const Footer = styled.View`
  padding: 0 10px 10px 10px;
`
const StatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
`
const LikesCount = styled.View`
  flex-direction: row;
  align-items: center;
`
const Like = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;
`
const ActionsContainer = styled.View`
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${colors.divider};
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 7px 10px;
`
const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`
const CommentsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`
const TextInputContainr = styled.View`
  border-width: 1.5px;
  border-color: ${colors.secondary};
  background-color: #e9e9e9;
  height: 40px;
  border-radius: 20px;
  flex: 1;
  padding: 0 7px;
  flex-direction: row;
  align-items: center;
`
const TextInputIcons = styled.View`
  flex-direction: row;
  margin-right: 7px;
`
const Posts = () => {
  return (
    <Container>
      {posts.map((post, index) => {
        return (
          <Post key={`post-${index}`}>
            <PostHeader>
              <InfoUserContainer>
                <Avatar isOnline={post.user.online} image={post.user?.picture} />
                <Subinfo>
                  <Username>{post.user?.username}</Username>
                  <Text>
                    {post.time} . <FontAwesome5 name="globe-africa" />
                  </Text>
                </Subinfo>
              </InfoUserContainer>

              <OptionsContainer>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    color={'rgba(0,0,0,0.6)'}
                    style={{ marginRight: 10 }}
                    size={24}
                    name="dots-horizontal"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    color={'rgba(0,0,0,0.6)'}
                    size={26}
                    name="close"
                  />
                </TouchableOpacity>
              </OptionsContainer>
            </PostHeader>
            {post.content && <PostContent>{post.content}</PostContent>}
            {post.image && <PostImage resizeMode="cover" source={post.image} />}
            <Footer>
              <StatsContainer>
                <LikesCount>
                  <Like>
                    <AntDesign name="like1" size={10} color={colors.white} />
                  </Like>
                  <Text style={{ marginLeft: 8 }}>10</Text>
                </LikesCount>
                <Text>8 commentaires</Text>
              </StatsContainer>
              <ActionsContainer>
                <Action>
                  <AntDesign
                    name="like2"
                    size={24}
                    style={{ marginRight: 7 }}
                  />
                  <Text>J'aime</Text>
                </Action>
                <Action>
                  <MaterialCommunityIcons
                    name="comment-outline"
                    size={22}
                    style={{ marginRight: 7 }}
                  />
                  <Text>Commenter</Text>
                </Action>
                <Action>
                  <MaterialCommunityIcons
                    name="share-outline"
                    size={28}
                    style={{ marginRight: 7 }}
                  />
                  <Text>Partager</Text>
                </Action>
              </ActionsContainer>
              <CommentsContainer>
                <Avatar style={{ marginRight: 7 }} image={nawonzon} />
                <TextInputContainr>
                  <TextInput
                    style={{ flex: 1 }}
                    placeholder="Votre commentaire..."
                  />
                  <TextInputIcons>
                    <TouchableOpacity>
                      <SimpleLineIcons
                        name="camera"
                        size={24}
                        style={{ marginRight: 10 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <SimpleLineIcons name="emotsmile" size={24} />
                    </TouchableOpacity>
                  </TextInputIcons>
                </TextInputContainr>
              </CommentsContainer>
            </Footer>
            <HorizontalDivider />
          </Post>
        )
      })}
    </Container>
  )
}

export default Posts
