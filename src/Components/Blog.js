import React from 'react';
import PostCard from './PostCard';
import { ServiceHeader } from '../Styled/index';

const Blog = () => {
  return (
    <div>
      <ServiceHeader>Blog: </ServiceHeader>
      <PostCard />
    </div>
  );
};

export default Blog;
