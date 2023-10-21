import React from 'react'
import { Row, Col, Image, Typography } from 'antd'
import { Link } from 'react-router-dom'


const { Title } = Typography

export type BlogStructure = {
    _id: string,
    thumbnail: string,
    title: string,
    content: string,
    author: string,
    date: string
}

export type BlogOverviewType = {
    Blog: BlogStructure

}

const BlogOverview = (props: BlogOverviewType) => {
  return (
    <Row style={{padding:"10px 20px"}}>
        <Col span={6} >
            <Image preview={false} width={330} height={250} src={props.Blog.thumbnail} />
        </Col>

        <Col span={18}>
            <Row>
                <Col span={4}>
                    <Title level={5} type={"secondary"}>{props.Blog.author}</Title>
                </Col>
                <Col span={4}>
                    <Title level={5} type={"secondary"}>{props.Blog.date}</Title>
                </Col>
            </Row>
            <Row>
                <Link to={`/blog/${props.Blog._id}`}><Title level={2}>{props.Blog.title}</Title></Link>
            </Row>
            
        </Col>
    </Row>
  )
}

export default BlogOverview