import React, { useEffect, useState } from 'react';
import './App.css';

function App(props) {
  // const [singer, setSinger] = useState(null);
  // const [name, setName] = useState(null)
  const [songs, setSongs] = useState([])
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0)
  const [muted, setMuted] = useState(false)
    
  useEffect(() => {
      // fetch('http://localhost:4000/api/songs')
      //   .then(response => response.json())
      //   .then(data => console.log(data));
    // fetch('http://localhost:4000/api/songs')
    //   .then(results => results.json())
    //   .then(data => {
    //     const {song} = data.results[0];
    //     setSinger(song.singer);
    //     setName(song.name);
    //   });
    fetchAPI()
  }, []); 

  async function fetchAPI() {
    let response = await fetch('http://localhost:4000/api/songs');
    let data = await response.json();
    
    setSongs(data)
    console.log(data);
}

const addVolume = (e) => {
  setVolume(volume + 1)
}

const reduceVolume = (e) => {
  setVolume(volume - 1)
}

const backwardSong = (e) => {
  if (currentSongIndex - 1 < 0) {
    setCurrentSongIndex(songs.length - 1);
  } else {
    setCurrentSongIndex(currentSongIndex - 1);
  }
}

const forwardSong = (e) => {
  if (currentSongIndex < songs.length - 1) {
    setCurrentSongIndex(currentSongIndex + 1);
  } else {
    setCurrentSongIndex(0);
  }
}
return (
  <div className="App">
    <div className='volume'>
    <input
        type="range"
        min={0}
        max={10}
        step={0.02}
        value={volume}
        onChange={event => {
          setVolume(event.target.valueAsNumber)
        }}
      />
      <button onClick={() => setMuted(m => !m)}>
        {muted ? "muted" : "unmuted"}
      </button>
    </div>
    <div className='current'>
      <div>
        Name: {  }
        
      </div>
      <div>
        Singer: {  }
      </div>
      <progress value='50' max='100'></progress>
    </div>

    <div className='control'>
      <div className='control-upper'>
        <button onClick={(e) => backwardSong(e)}>Prev</button>
        <button onClick={(e) => setTimeout((e) => forwardSong(e), 10000)}>Play</button>
        <button onClick={(e) => forwardSong(e)}>Next</button>
      </div>
      <div className='control-lower'>
        <button onClick={(e) => reduceVolume(e)} >Vol -</button>
        <button onClick={(e) => addVolume(e)}>Vol +</button>
      </div>
    </div>
      
     <table>  
       <tr>
         <th>Song List</th>
       </tr>
       {
         songs.map((song, index) => {
            if(index === currentSongIndex){
              return <div key={index}>
              <tr>
                <td className='currentSong'>
                  <b>{songs[currentSongIndex].name}</b>
                </td>
              </tr>
              </div>
            }
              return <div key={index}>
              <tr>
                <td>{songs[index].name}</td>
              </tr>
              </div>   

         })
       }
     </table>
    </div>
  );
}

export default App;
