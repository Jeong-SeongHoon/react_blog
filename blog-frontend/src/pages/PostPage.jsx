import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostViewerContainer from '../containers/post/PostViewerContainer';

const PostPage = () => {
  console.log('PostPage');
  return (
    <>
      <Helmet>
        <title>REACTERS - VIEW</title>
      </Helmet>
      <HeaderContainer></HeaderContainer>
      <PostViewerContainer></PostViewerContainer>
    </>
  );
};

export default PostPage;
