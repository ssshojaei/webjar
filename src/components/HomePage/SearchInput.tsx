import React from 'react'
import { FiSearch } from 'react-icons/fi'

export interface TSearchInput
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    React.AriaAttributes {}

const SearchInput = ({ ...props }: TSearchInput) => {
  return (
    <div className="mx-auto flex max-w-lg items-center gap-2 overflow-hidden rounded-2xl bg-white px-3 py-3 shadow-md">
      <FiSearch color="#7B7B7B" />
      <input
        type="search"
        className="w-full outline-none"
        placeholder="جست‌وجو کنید..."
        {...props}
      />
    </div>
  )
}

export default SearchInput
