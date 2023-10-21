import React, { useEffect, useState } from 'react'
import axios from 'axios';

import BlogOverview from '../components/BlogOverview'

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    const { data } = await axios.get('http://localhost:3001/blogs');

    setBlogs(data);
  }

  useEffect(() => {
    getBlogs();
  }, [])

  return (
    <div>{blogs && blogs.map(blog => (<BlogOverview Blog={blog} />) )}</div>
  )
}

export default Blogs