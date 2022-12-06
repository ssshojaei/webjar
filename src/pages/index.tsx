import BlogItem from 'components/Blog/BlogItem'
import Breadcrumbs from 'components/Breadcrumbs'
import SearchInput from 'components/HomePage/SearchInput'
import Layout from 'components/Layout'
import React, { ChangeEvent } from 'react'
import PostList, {
  ALL_POSTS_QUERY,
  allPostsQueryVars,
} from 'components/HomePage/PostList'
import { initializeApollo, addApolloState } from 'lib/apolloClient'

const links = [
  {
    link: '/',
    label: 'پروژه‌ها',
  },
  {
    link: '/',
    label: 'صفحه ۲',
  },
  {
    link: '/',
    label: 'صفحه ۳',
  },
  {
    link: '/',
    label: 'صفحه ۴',
  },
]

export default function Home() {
  const [search, setSearch] = React.useState('')

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <Layout>
      <Breadcrumbs pages={links} />
      <div className="my-4 flex h-16 items-center justify-center text-center">
        <h1 className="text-2xl font-extrabold">وبلاگ</h1>
      </div>
      <SearchInput onChange={handleSearch} value={search} />
      <div className="container mt-6 py-4">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">1</div>
          <PostList search={search} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: allPostsQueryVars,
  })

  return addApolloState(apolloClient, {
    props: {},
  })
}
