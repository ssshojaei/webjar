import React from 'react'
import { IPost } from 'types/post'
import classnames from 'classnames'

const renderButton = ({ index, page, classes, handleClick }: any) => {
  const id = index + 1
  const btnClass =
    page === id
      ? 'bg-green-500 text-white'
      : 'text-green-500 border-green-500 border-2 bg-white'
  return (
    <button
      className={classnames(classes, btnClass)}
      key={index}
      onClick={handleClick(id)}
    >
      <span>{id}</span>
    </button>
  )
}

type TPaginationProps = {
  page: number
  onChange: (id: number) => void
  list: IPost[]
  perPage: number
}

const Pagination = ({ page, list, perPage, onChange }: TPaginationProps) => {
  const pages = ~~(list.length / perPage)
  const handleClick = (id: number) => () => onChange(id)
  const classes =
    'flex h-12 w-12 items-center justify-center rounded-2xl transition-all'

  return (
    <div className="my-8 flex justify-center gap-1">
      {Array(pages)
        .fill(null)
        .map((_, index) => renderButton({ index, page, classes, handleClick }))}
    </div>
  )
}

export default Pagination
