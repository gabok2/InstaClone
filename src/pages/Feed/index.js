import React, {useState, useEffect} from 'react';
import { View,FlatList, Image, TouchableOpacity } from 'react-native';
import api from '../../services/api';
import Like from 'react-native-vector-icons/AntDesign';
import Comment from 'react-native-vector-icons/FontAwesome';
import save from '../../assets/save.png';
import Send from 'react-native-vector-icons/Feather';
import Options from 'react-native-vector-icons/SimpleLineIcons';

import {
Container,
Stories, 
Post, 
FeedHeader,
UserInfo,
Avatar,
AvatarStories,
Name, 
PostImage,
StoriesName,
Footer,
Actions,
Invert,
Loading,
} from './styles';

export default function Feed() {
  const [author, setAuthor]= useState([]);
  const [feed, setFeed]= useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function loadData(){
      const [authors, feed] = await Promise.all([
        api.get('/authors').then(res=> res.data),
        api.get(`/feed`).then(res=> res.data),
        
      ]);

      const feedFormated = feed.map(f => ({
        ...f,
        author: authors.find(a => a.id === f.authorId)
      }))

      setAuthor(authors);
      setFeed(feedFormated);
      setLoading(false);
    
    }
    
    loadData();
  },[]);

  function stories(){
    return(
      <Container>
       
      <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={author}
      keyExtractor={authors=> String(authors.id)}
      renderItem={({item})=>(
        
        <Stories>
          <AvatarStories source={{uri:item.avatar}}/>
          <StoriesName>{item.name}</StoriesName>
        </Stories>
        
      )}
      />
      </Container>
      
    );
  }

  return (
    <View>
      {loading ? (
        <Loading />
      ) : ( 
      <FlatList
      ListHeaderComponent={stories}
      showsVerticalScrollIndicator={false}
      data={feed}
      keyExtractor={post=> String(post.id)}
      renderItem={({item})=>(
        <Post>
          <FeedHeader>

            <UserInfo>
              <Avatar source={{uri:item.author.avatar}}/>
              <Name>{item.author.name}</Name>
            </UserInfo>

            <Options style={{marginRight:10}} name="options-vertical" size={20} 
            color="#fff" />
          
          </FeedHeader>
      
          <PostImage ratio={item.aspectRatio} source ={{uri: item.image}} /> 

          <Footer >

            <Actions>
              <TouchableOpacity>
                <Like name="hearto" size={25} color="#fff"/>
              </TouchableOpacity>

              <TouchableOpacity>
                <Invert>
                  <Comment name="comment-o" size={25} color="#fff"/>
                </Invert>
              </TouchableOpacity>

              <TouchableOpacity>
                <Send name="send" size={25} color="#fff" style={{marginLeft:20}}/>
              </TouchableOpacity>
            </Actions>

            <TouchableOpacity>
              <Image  source={save} style={{height:25, width:25, marginRight:10}} />
            </TouchableOpacity>
            
          </Footer>

        </Post>
      )}
      />
    )}
    </View>
  );
}
