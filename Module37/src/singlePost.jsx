export default function post({ post }) {
  return (
    <div className='card'>
      <h2 className="card">{post.title}</h2>
      <h4>{post.body}</h4>
    </div>
  )
}