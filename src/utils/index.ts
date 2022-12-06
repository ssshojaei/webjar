export const getRandom = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const striptags = (value: string) => value.replace(/(<([^>]+)>)/gi, '')

export const paginate = (
  array: any[],
  page_size: number,
  page_number: number
) => {
  return array.slice((page_number - 1) * page_size, page_number * page_size)
}
