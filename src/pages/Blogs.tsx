import React from 'react'
import BlogsData from '../mock/BlogsData'
import BlogOverview from '../components/BlogOverview'

const Blogs = () => {
  return (
    <div>{BlogsData.map(blog => (<BlogOverview Blog={blog} />) )}</div>
  )
}

export default Blogs