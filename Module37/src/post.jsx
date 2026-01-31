import { use } from 'react';
import SinglePost from './singlePost.jsx';
export default function Posts({ postPromise }) {
  const posts=use(postPromise);
  return (
    <div className='card'>
      <h2>All posts are here :{posts.length}</h2>
      {
        posts.map(post=><SinglePost key={post.id} post={post}></SinglePost>)
      }

    </div>
  )
}