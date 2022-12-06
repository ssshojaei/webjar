import Breadcrumbs from 'components/Breadcrumbs'
import SearchInput from 'components/HomePage/SearchInput'
import Layout from 'components/Layout'
import React, { ChangeEvent } from 'react'
import PostList, { ALL_POSTS_QUERY } from 'components/HomePage/PostList'
import { initializeApollo, addApolloState } from 'lib/apolloClient'
import Pagination from 'components/Pagination'
import { IPost } from 'types/post'

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
  const [list, setList] = React.useState<IPost[]>([])
  const [search, setSearch] = React.useState('')
  const [page, setPage] = React.useState(1)
  const PER_PAGE = 4

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setPage(1)
  }
  const handleChangePage = (id: number) => {
    setPage(id)
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
          <PostList
            search={search}
            page={page}
            perPage={PER_PAGE}
            list={list}
            setList={setList}
          />
        </div>
        <Pagination
          page={page}
          onChange={handleChangePage}
          list={list}
          perPage={PER_PAGE}
        />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
  })

  return addApolloState(apolloClient, {
    props: {},
  })
}
