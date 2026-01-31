import { useState } from 'react';
export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const[sixes, setSixes] = useState(0);
  const handleSingles = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  }
  const handleFours = () => {
    const updateRuns = runs + 4;
    setRuns(updateRuns);
  }
  const handleSixes = () => {
    const updateSixes = runs + 6;
    const UpdatedSixes = sixes + 1;
    setSixes(UpdatedSixes);
    setRuns(updateSixes);
  }
  return (
    <div>
      <h3>player: Bangla Batsman </h3>
      <p><small>Six: {sixes}</small></p>
      {
        runs>50 && <p>Your Score: 50</p>
      }
      <h1>Score: {runs}</h1>
      <button onClick={handleSingles}>Singles</button>
      <button onClick={handleFours}>Four</button>
      <button onClick={handleSixes}>Six</button>
    </div>
  )
  
}