import axios from 'axios'
import React, { useContext, useState } from 'react'
import { MyContext } from '../../App'



const SongrequestForm = ({eventsId, fetchSongData}) => {

  const context = useContext(MyContext)
  const { userName, fetchAllEvents } = context

  const intitalState = {
    title: "",
    artist: "",
    user: `${userName}`
  }
  const [song, setSong] = useState(intitalState);
  
  
  const {title, artist ,user} = song

  const url = `api/events/${eventsId}/song`

  const handleChange = (e) => {
    const {name, value} = e.target
    console.log(value);
    setSong({...song, [name]:value})
}

   const songPost = async (e) => {
     e.preventDefault()
      try {
          const res = await axios.post(url,{ title, artist, user} )
           setSong({...song, res})
           console.log("Song Data",res);
           
           fetchAllEvents()
           fetchSongData()
           setSong(intitalState)
          
      } catch (err) {
          console.log(err);
      }
    }

  

console.log("Song State", song);


  return (
    <div className="form">
      
      <form >
        <div className="form-group py-2">
          
          <input type="text" className="form-control" id="song" onChange={handleChange} value={title} name="title" aria-describedby="emailHelp" placeholder="Song Name" />
      
        </div>
        <div className="form-group py-2">
        
          <input type="text" onChange={handleChange} value={artist} name="artist" className="form-control" id="artist" placeholder="Artist" />
        </div>
        <div style={{ display: "none" }} className="form-group py-2">
        <label htmlFor="artist">User Name</label>
          <input type="text" className="form-control"  value={userName} />
        </div>
        
        <button onClick={songPost} type="submit" className="btn btn-primary my-2">Submit Request</button>
      </form>
    </div>
  )
}

export default SongrequestForm
