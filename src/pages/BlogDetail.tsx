import React from 'react'
import { useParams } from 'react-router-dom'

const BlogDetail = () => {
    let { id } = useParams();
  return (
    <div>BlogDetail - Blog id is {id}</div>
  )
}

export default BlogDetail