import { useEffect, useState } from "react";
export default function player() {
  const [player, setPlayer] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setPlayer(data))
  }, []);
  return (
    <div className="card"><h4>Player: {player.length}</h4>
      <ol>
        {
          player.map(pl => <li>{pl.name}</li>)
        }
    </ol>
    </div>
  )
}