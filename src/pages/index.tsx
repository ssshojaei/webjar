import BlogItem from 'components/Blog/BlogItem'
import Breadcrumbs from 'components/Breadcrumbs'
import SearchInput from 'components/HomePage/SearchInput'
import Layout from 'components/Layout'
import React, { ChangeEvent } from 'react'

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
          <div className="flex flex-[3] flex-col gap-12">
            {new Array(5).fill(null).map((item, index) => (
              <BlogItem key={index} index={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
