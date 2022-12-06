import Button from 'components/Button/Button'
import Image from 'next/image'
import React from 'react'
import { FiCalendar, FiMessageSquare, FiUser } from 'react-icons/fi'

type TBlogItem = {
  index: number
}

const BlogItem = ({ index }: TBlogItem) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white sm:flex-row">
      <Image
        src={`https://picsum.photos/300?random=${index}`}
        alt="www"
        width={300}
        height={280}
        style={{
          objectFit: 'contain',
        }}
      />
      <div className="w-full px-4 py-4">
        <div className="flex h-full flex-col lg:flex-row">
          <div className="flex flex-[3] flex-col justify-between px-2 lg:pr-4 lg:pl-10">
            <div>
              <h4 className="text-lg font-semibold text-black">
                یک سایت خوب باید چه ویژگی هایی داشته باشد
              </h4>
              <p className="mt-4 text-base font-light">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </p>
            </div>
            <div className="flex justify-between pb-5">
              <div className="flex gap-1">
                <FiCalendar />
                <span className="text-sm font-light">20 اردیبهشت 1400</span>
              </div>
              <div className="flex gap-1">
                <FiMessageSquare />
                <span className="text-sm font-light">10 نظر</span>
              </div>
              <div className="flex gap-1">
                <FiUser />
                <span className="text-sm font-light">علی نسیمی</span>
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
