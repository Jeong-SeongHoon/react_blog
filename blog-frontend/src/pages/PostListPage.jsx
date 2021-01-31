import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import PostListContainer from '../containers/posts/PostListContainer';

const PostListPage = () => {
  console.log('PostListPage');
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <PostListContainer></PostListContainer>
      <PaginationContainer></PaginationContainer>
    </>
  );
};

export default PostListPage;
