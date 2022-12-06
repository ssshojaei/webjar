import Breadcrumbs from 'components/Breadcrumbs'
import Layout from 'components/Layout'
import React from 'react'

const links = [
  {
    link: '/pages',
    label: 'صفحه‌ها',
  },
  {
    label: 'بلاگ',
  },
]

const blog = () => {
  return (
    <Layout>
      <Breadcrumbs pages={links} />
      <h1>blog</h1>
    </Layout>
  )
}

export default blog
