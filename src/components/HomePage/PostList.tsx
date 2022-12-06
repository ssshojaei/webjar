import { gql, useQuery } from '@apollo/client'
import BlogItem from 'components/Blog/BlogItem'
import React from 'react'
import { IPost } from 'types/post'
import { paginate } from 'utils'
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

type TPostList = {
  search: string
  page: number
  perPage: number
  list: IPost[]
  setList: React.Dispatch<React.SetStateAction<IPost[]>>
}

const PostList = ({ search, page, perPage, list, setList }: TPostList) => {
  const { loading, error, data } = useQuery(ALL_POSTS_QUERY, {
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
  }, [data.getPosts, search, setList])

  const paginated = React.useCallback(() => {
    return paginate(list, perPage, page)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list, page])

  if (error) return <ErrorMessage message="Error loading posts." />
  if (loading) return <div>Loading</div>

  return (
    <section className="flex flex-[3] flex-col gap-12">
      {paginated().map((post: IPost) => (
        <BlogItem key={post._id} {...post} />
      ))}
    </section>
  )
}

export default PostList
