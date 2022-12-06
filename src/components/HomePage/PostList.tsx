import { gql, useQuery } from '@apollo/client'
import BlogItem from 'components/Blog/BlogItem'
import React from 'react'
import { IPost } from 'types/post'
import ErrorMessage from './ErrorMessage'

export const ALL_POSTS_QUERY = gql`
  query ALL_POSTS {
    getPosts {
      _id
      title
      body
      commentCount
      author
      introImageUrl {
        host
        path
      }
      createdAt
    }
  }
`

export const allPostsQueryVars = {
  skip: 0,
  first: 10,
}

type TPostList = {
  search: string
}

const PostList = ({ search }: TPostList) => {
  const [list, setList] = React.useState([])
  const { loading, error, data } = useQuery(ALL_POSTS_QUERY, {
    variables: allPostsQueryVars,
    notifyOnNetworkStatusChange: true,
  })

  React.useEffect(() => {
    if (search) {
      setList(
        data.getPosts.filter((post: IPost) => post.title.includes(search))
      )
    } else {
      setList(data.getPosts)
    }
  }, [data.getPosts, search])

  if (error) return <ErrorMessage message="Error loading posts." />
  if (loading) return <div>Loading</div>

  return (
    <section className="flex flex-[3] flex-col gap-12">
      {list.map((post: IPost) => (
        <BlogItem key={post._id} {...post} />
      ))}
    </section>
  )
}

export default PostList
