import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import SongCard from './SongCard';
import SongrequestForm from './SongrequestForm';



const Dashboard = () => {
  

  
  const context = useContext(MyContext)
  const { token, loading, allevents, fetchAllEvents } = context;

  

  useEffect(() => {
    fetchAllEvents()
  }, [])

  
  return (
    <>
    
    {!token ? <Redirect to="/login"/> :
    <div className="container my-3">
      
        
      <div className="row mt-4">
        <div className="col col-lg-9">
        <div className="d-flex align-items-center">
        <h2>Manage Events</h2>
        </div>
        </div>
        <div className="col col-lg-3">
        <div className="d-flex justify-content-end">
         <button className="btn btn-lg btn-info d-block "> <Link to="/createvent" className="text-light">Create New Event</Link> </button>
        </div>
        </div>
      </div>
      <hr/>
      {
        loading ? <div>Loading ....</div>:
        allevents.map((event, index) => (
          <div className="row border p-2 m-2" key={index}>
              
              <div className="col-sm-7">

                  
                  {
                    index === 0 ?
                    <div className="my-4">
                      <h3 className="text-dark">
                      {
                      event.eventname 
                      } @ {event.eventtime}
                    </h3>
                  </div>
                    :
                    <div className="bg-danger my-4">
                    <p className="p-2 text-light">
                    {
                     event.eventname 
                    }- {event.eventtime} - Expired
                  </p>
                  </div>
                  }
                  
                
               {
                 index === 0 ?
                 <>
                 <div className={`song__request bg-primary text-light`}>
                  <p className="p-2">Place a song request</p>
                </div>
                  <SongrequestForm eventsId={event._id} />
                  </>
                  : <div></div>
               }

           
                <div className="card__container mt-2">
                  {
                    !event.song ? <div>Empty</div>:
                    event.song.map((songItem, index) => {
                      return (
                        <div key={index}>
                          <SongCard songFinished={songItem.isFinished} createdAt={songItem.createdAt} index={index} id={songItem._id} eventId={songItem.events} title={songItem.title} artist={songItem.artist} user={songItem.user}/>
                        </div>
                      )
                    })
                  }
                  
                </div>
            </div>
            
            <div className="col-sm-5 ml-4">
            <div className="p-3 " style={{ marginTop: "14%", marginLeft: "2%"}}>
            <div className="bg-success text-light px-2 py-2" style={{ margin: "1% 0 5% 0" }}>Songs already played</div>
                {
                  !event.song ? <div>Empty</div>:
                  event.song.map((es, index) => {
                    return(
                      <div>
                        {es.isFinished === 1 ?
                      <div>
                        <p className="text-dark font-weight-bold">{index+1}. {es.title}</p>
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
      <hr/>
    </div>
   
}
    </>
  )
}

export default Dashboard
