import axios from 'axios';
import { load } from 'dotenv';
import React, { useContext, useEffect, useState } from 'react'
import { Redirect } from 'react-router';
import { MyContext } from '../../App';
import SongCard from './SongCard';
import SongrequestForm from './SongrequestForm';

const url = "/api/events/songs"

const Song = () => {
  const [songList, setSongList] = useState([])
  
  const context = useContext(MyContext)
  const { token, loading, setLoading } = context;

  const fetchSongData = async () => {
    try {
      const res = await axios.get(url);
      console.log(res);
      setLoading(false)
      setSongList(res.data);
    } catch (error) {
      
    }
  }

  useEffect(() => {
   fetchSongData()
  }, [])

  return (
    <>
    
    {!token ? <Redirect to="/login"/> :
    <div className="container">
      <h2 className="mt-5">Song Request</h2>
      <hr/>
      {
        loading ? <div>Loading ....</div>:
        songList.map((song, index) => (
          <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-6">
                <div className="song__request bg-primary text-light">
                  <p className="p-2">Place a song request</p>
                </div>
                
                <SongrequestForm/>

                <div className="bg-warning my-4">
                  <p className="p-2 text-light">Songs to be played</p>
                </div>
                <div className="card__container">
                  
                  <SongCard title={song.title} artist={song.artist}/>

                </div>
            </div>
            
            <div className="col-sm-4"></div>
          </div>
        ))
        
      
      }
      
    </div>
}
    </>
  )
}

export default Song
