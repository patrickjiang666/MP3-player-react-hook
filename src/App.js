import React, { useEffect, useState } from 'react';
import './App.css';
import ControlBar from './components/ControlBar/ControlBar';
import SongList from './components/SongList/SongList';


function App(props) {
  // const [singer, setSinger] = useState(null);
  // const [name, setName] = useState(null)
  const [volume, setVolume] = useState(0)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState([])
  const [muted, setMuted] = useState(false)
  
  const [trackProgress, setTrackProgress] = useState(0);
  
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
  },[]); 


  async function fetchAPI() {
    let response = await fetch('http://localhost:4000/api/songs');
    let data = await response.json();
    
    setSongs(data)
    console.log(data);
  }

  const addVolume = (e) => {
    if(volume < 10){
      setVolume(volume + 1)
    } 
  }

  const reduceVolume = (e) => {
    if(volume > 0){
      setVolume(volume - 1)
    }
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

  const onScrub = (e) => {
    setTrackProgress(e.target.value)
  }

  const autoJump = (e) => {
    clearTimeout(timeOut)
    var timeOut = setTimeout(() => forwardSong(), 2000)
  }

  return (
    <div className="App">
      <ControlBar
        volume={volume} currentSongIndex={currentSongIndex} isPlaying={isPlaying} setIsPlaying={setIsPlaying}
        songs={songs} muted={muted} addVolume={addVolume} reduceVolume={reduceVolume}
        backwardSong={backwardSong} forwardSong={forwardSong} trackProgress={trackProgress}
        onScrub={onScrub} autoJump={autoJump} setTrackProgress={setTrackProgress}
      />
      <SongList
        songs={songs} currentSongIndex={currentSongIndex}
      />
     
    </div>
  );
}

export default App;
