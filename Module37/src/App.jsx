import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter.jsx'
import Batsman from './Batsman.jsx'
import Users from './users.jsx'
import Friends from './friends.jsx'
import Posts from './post.jsx'
import Player from './player.jsx'

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())

// const fetchFriends = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }

// const fetchPosts = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return res.json();
// }

function App() {

  // const friendPromise=fetchFriends();
  // const postPromise=fetchPosts();
  function handleClick() {
    alert("I am Clicked.")
  }

  const handleCLick3 = () => {
    alert("I wanna be a good developer.")
  }
  
  const handleAdd5 = (num) => {
    const newNum = num + 5
    alert(newNum);
  }
  return (
    <>
      
      <h3>Vite + React</h3>

      <Player></Player>

      {/* <Suspense fallback={<h4>posts are coming ...</h4>
      }><Posts postPromise={postPromise}></Posts></Suspense> */}
      
      {/* <Suspense fallback={<h3>Loading...</h3>}><Users fetchUsers={fetchUsers}></Users></Suspense> */}
      
      {/* <Suspense fallback={<p>Friends are calling Me.......</p>}>
        <Friends friendPromise={friendPromise}></Friends>
      </Suspense> */}

      <Batsman></Batsman>
     
      <Counter></Counter>
      

      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2() {
        alert("Hi KIKIMOONSTER.")
      }}>Click Me2</button>
      <button onClick={handleCLick3}>Click Me</button>
      <button onClick={() => alert("Click 4.")}>Click me</button>

      <button onClick={() => handleAdd5(20)}>Click Add 5</button>
      
     
    </>
  )
}

export default App
