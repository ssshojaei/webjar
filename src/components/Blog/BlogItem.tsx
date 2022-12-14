import Button from 'components/Button/Button'
import Image from 'next/image'
import React from 'react'
import { FiCalendar, FiMessageSquare, FiUser } from 'react-icons/fi'
import { IPost } from 'types/post'
import moment from 'jalali-moment'
import { striptags } from 'utils'

const BlogItem = ({
  _id,
  author,
  body,
  commentCount,
  createdAt,
  introImageUrl,
  title,
}: IPost) => {
  const image = `/api/imageproxy?url=${encodeURIComponent(
    `${introImageUrl.host}${introImageUrl.path}`
  )}`

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white sm:flex-row">
      <Image
        src={image}
        alt={title}
        width={300}
        height={280}
        className="w-full object-cover md:w-auto"
      />
      <div className="w-full px-4 py-4">
        <div className="flex h-full flex-col lg:flex-row">
          <div className="flex flex-[3] flex-col justify-between px-2 lg:pr-4 lg:pl-10">
            <div>
              <h4 className="text-lg font-semibold text-black">{title}</h4>
              <p className="my-4 text-base font-light line-clamp-3">
                {striptags(body)}
              </p>
            </div>
            <div className="flex justify-between pb-5">
              <div className="flex gap-1">
                <FiCalendar />
                <span className="text-sm font-light">
                  {moment(createdAt).locale('fa').format('D MMMM YYYY')}
                </span>
              </div>
              <div className="flex gap-1">
                <FiMessageSquare />
                <span className="text-sm font-light">{commentCount} نظر</span>
              </div>
              <div className="flex gap-1">
                <FiUser />
                <span className="text-sm font-light">{author}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-end justify-center">
            <Button className="btn-primary">بیشتر</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
