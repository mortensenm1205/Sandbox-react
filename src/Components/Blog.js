import React from 'react';
import PostCard from './PostCard';
import { ServiceHeader, MainBlogDiv, BlogOnlyDiv } from '../Styled/index';

const Blog = () => {
  return (
    <MainBlogDiv>
      <ServiceHeader>Blog: </ServiceHeader>
      <PostCard />
    </MainBlogDiv>
  );
};

export default Blog;
