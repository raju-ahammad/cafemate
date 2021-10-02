import axios from 'axios';
import React, { useContext, useState } from 'react'
import { MyContext } from '../../App';
import Moment from 'react-moment';
import 'moment-timezone';

const initialState = {
  isFinished: 1
}

const SongCard = ({title, artist, user, index, id, eventId,fetchSongData, songFinished, createdAt}) => {

  const [updatedSong, setUpdatedSong] = useState(initialState)

  const url = `/api/event/${eventId}/song/${id}`
  const context = useContext(MyContext)
  const { isAdmin, isArtist, fetchAllEvents } = context;

  const {isFinished} = updatedSong;

  const handleFinished =  (e) =>{
    e.preventDefault()
    try {
      const res = axios.put(url, {isFinished: isFinished})
      console.log("update", res);
      setUpdatedSong(res)
      fetchAllEvents()
      fetchSongData()
    } catch (error) {
      console.log(error);
    }
  }

  const createdDate = new Date(createdAt)

  return (
    <>
    
    <div className={songFinished ===1 ? `d-none`: `card my-2`}>

      <div className={index === 0 ? `row p-3 text-dark` : `row p-3 text-dark`}>
        <div className="col-9">
          <h5> {title} </h5>
          <p>Artist: {artist}</p>
          <p>Requested by {user ? user: ""}</p>
        </div>
        <div className="col-3">
          <small>{createdDate.getMinutes()} minutes ago</small>
         
          {
            isAdmin===1 || isArtist===1 ? 
            <button onClick={handleFinished} className="btn btn-success mt-4"><span><i class="fas fa-check"></i></span> Done </button>:""
          }
        </div>

      </div>
    </div>
    </>
  )
}

export default SongCard
