export default function friend({ friend }) {
  return (
    <div className='card'>
      <h4>Name: {friend.name}</h4>
      <h4>Email: {friend.email}</h4>
      <p>Phone: {friend.phone}</p>
    </div>
  )
}