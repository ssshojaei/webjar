export interface IPost {
  _id: string
  author: string
  body: string
  category?: {
    __typename: 'PostCategory'
    _id: string
    name: string
  }
  commentCount: number
  createdAt: string
  introImageUrl: {
    __typename: 'URL'
    host: string
    path: string
  }
  title: string
  __typename: 'Post'
}
