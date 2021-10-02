import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Redirect } from 'react-router';
import { MyContext } from '../../App';
import SongCard from './SongCard';
import SongrequestForm from './SongrequestForm';

const url = "/api/events"
const songUrl = "api/events/songs";

const Song = () => {
  const [events, setEvents] = useState([])


  
  const context = useContext(MyContext)
  const { token, loading, setLoading } = context;

  const fetchSongData = async () => {
    try {
      const res = await axios.get(url);
      console.log("SongData", res.data);
      setLoading(false)
      setEvents(res.data);
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
        events.map((event, index) => (
          <div className="row" key={index}>
              
              <div className="col-sm-7">
                

                <div className=" my-4">
                  <h3 className="text-dark">{event.eventname} - {event.eventtime}</h3>
                </div>
                <div className="song__request bg-primary text-light">
                  <p className="p-2">Place a song request</p>
                </div>
               

                <SongrequestForm eventsId={event._id} fetchSongData={fetchSongData}/>
           
                <div className="card__container">
                <div className="bg-warning text-light px-2 py-2 my-4">Songs to be played</div>
                  {
                    !event.song ? <div>Empty</div>:
                    event.song.map((songItem, index) => {
                      return (
                        <div key={index}>
                          <SongCard fetchSongData={fetchSongData} songFinished={songItem.isFinished} index={index} id={songItem._id} createdAt={songItem.createdAt} eventId={songItem.events} title={songItem.title} artist={songItem.artist} user={songItem.user} />
                        </div>
                      )
                    })
                  }
                  
                </div>
                
            </div>
            
            <div className="col-sm-5 mt-5 ">
            <div className="bg-success text-light px-2 py-2" style={{ margin: "7% 0 2% 0" }}>Songs already played</div>
            <div>
            {
              !event.song ? <div>Empty</div>:
              event.song.map(es => {
                return(
                  <div>
                    {es.isFinished === 1 ?
                  <div>
                    <div className="card bg-light my-2  px-4 py-2">
                    <h5>{es.title}</h5>
                    <p>Artist: {es.artist}</p> 
                    </div>
                  </div>:""  
                  }
                  </div>
                )
              })
            }
            </div>
            </div>
          </div>
        ))
        
      
      }
      
    </div>
}
    </>
  )
}

export default Song
