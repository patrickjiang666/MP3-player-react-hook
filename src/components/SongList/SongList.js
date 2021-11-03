import React from "react";


function SongList({songs, currentSongIndex}) {
    return(
        <>
        <table>  
        <tr>
          <th>Song List</th>
        </tr>
        {
          songs.map((song, index) => {
              if(index === currentSongIndex){
                return <div key={index}>
                <div className='currentSong'>
                  <b>{songs[currentSongIndex].name}</b>
                </div>
                </div>
              }else{
                return <div key={index}>
                {songs[index].name}
              </div> 
              }
          })
        }
      </table>
        </>
    )
}

export default SongList;