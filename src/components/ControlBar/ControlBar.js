import React, { useEffect } from "react";



function ControlBar({songs, currentSongIndex, volume, setVolume, setIsPlaying,
  isPlaying, trackProgress, setTrackProgress, muted, setMuted, addVolume, reduceVolume, 
  backwardSong, forwardSong, onScrub, autoJump }) {

  useEffect(() => {
    autoJump()

  },[currentSongIndex])

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
          {muted ? 'muted' : 'unmuted'}
        </button>
      </div>
      <div className='current'>
        <div>
          {
            songs.map((song, index) => {
              if(index === currentSongIndex){
                return <div key={index}>
                <div className='currentSong'>
                  <b>{ 'Name: ' + songs[currentSongIndex].name }</b>
                </div>
                </div>
              }
            })  
          }
        </div>
        <div>
          {
            songs.map((song, index) => {
              if(index === currentSongIndex){
                return <div key={index}>
                <div className='currentSong'>
                  <b>{ 'Singer: ' + songs[currentSongIndex].singer }</b>
                </div>
                </div>
              }
            })  
          }
        </div>
        <input
          type="range"
          value={trackProgress} 
          step={0.02}
          min={0}
          max={10}
          className="progress"
          onChange={event => {
            setTrackProgress(event.target.valueAsNumber)
          }}
        />
      </div>

      <div className='control'>
        <div className='control-upper'>
          <button onClick={(e) => backwardSong(e)}>Prev</button>
          <button onClick={(e) => {autoJump(e); setIsPlaying(f=>!f)}}>
            {isPlaying ? 'Pause' : 'Play'}</button>
          <button onClick={(e) => forwardSong(e)}>Next</button>
        </div>
        <div className='control-lower'>
          <button onClick={(e) => reduceVolume(e)} >Vol -</button>
          <button onClick={(e) => addVolume(e)}>Vol +</button>
        </div>
      </div>
    </div>
  );      
}

export default ControlBar;