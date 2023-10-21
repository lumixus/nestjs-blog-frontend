import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BlogStructure } from '../components/BlogOverview';

const BlogDetail = () => {
  const { id } = useParams();
  
  const [blog, setBlog] = useState<BlogStructure | undefined>();

  const getBlog = useCallback(async () => {
    const { data } = await axios.get(`http://localhost:3001/blogs/${id}`);

    setBlog(data);
  }, [id]);

  useEffect(() => {
    getBlog();
  }, [getBlog]);
  

  return (
    <div>
      BlogDetail - Blog id is {id}
      <p>Blog author is {blog && blog.author}</p>
    </div>
  )
}

export default BlogDetail