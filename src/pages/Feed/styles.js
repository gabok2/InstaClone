import styled from 'styled-components/native';

export const Container = styled.View`
  padding-bottom: 20px;
  border-bottom-width: 0.3px;
  border-color: #a4aba6;
  padding:5px;
  background-color: black;
  `;

export const Stories = styled.View`
  align-items:center;
`;

export const AvatarStories = styled.Image`
  margin-top:10px;
  margin-left: 10px;
  width:48px;
  height:48px;
  border-radius:24px;
`;

export const StoriesName= styled.Text.attrs({
  numberOfLines:2,
})`
  margin: 10px;
  color: white;
`;

export const Post = styled.View`
  background-color: black;
`;

export const FeedHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
  margin-top:10px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PostImage = styled.Image`
  width: 100%;
  aspect-ratio: ${props=> props.ratio};
  margin-top:5px;
`;


export const Avatar = styled.Image`
  margin-left: 10px;
  width:30px;
  height:30px;
  border-radius:15px;
`;

export const Name = styled.Text`
  margin-left: 10px;
  text-align: center;
  color: white;
  font-weight: bold;
`;


export const Footer = styled.View`
  margin-top:10px;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
  margin-bottom:15px;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left:10px;
`;

export const Invert = styled.View`
  transform: scaleX(-1);
  margin-left:20px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999',
})`
  justify-content:center;
  align-items: center;
  width:100%;
  height:100%;
  background-color: black;
`;

