export default function ErrorMessage({ message }: { message: string }) {
  return (
    <aside className="bg-red-500 p-2 text-base text-white">{message}</aside>
  )
}
