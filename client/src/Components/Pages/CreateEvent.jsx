import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router';
import { MyContext } from '../../App';

const intitalState = {
  eventname: "",
  eventtime: "",
}

const url = "/api/event"

function CreateEvent() {

  const [event, setEvent] = useState(intitalState);
  
  const {eventname, eventtime } = event

  const context = useContext(MyContext)
  const { token, fetchAllEvents } = context;

  let history = useHistory();

  const handleChange = (e) => {
    const {name, value} = e.target
    setEvent({...event, [name]:value})
}
console.log(event);

   const eventPost = async (e) => {
     e.preventDefault()
     console.log("Event Post");
      try {
          const res = await axios.post(url,{ eventname, eventtime} )

          setEvent({...event, res})
           console.log("Song Data",res);
           fetchAllEvents()
           setEvent(intitalState)
           history.push('/dashboard')
          
      } catch (err) {
          console.log(err);
      }
    }

  
  return (
    <div className="container">
      <div className="row">
        <div className="col-3 col">
          
        </div>
        <div className="col-6 col mt-5">
          <div className="card p-4" >

          
            <form >
            <div className="form-group py-2">
              
              <input type="text" className="form-control" id="song" onChange={handleChange} value={eventname} name="eventname" aria-describedby="emailHelp" placeholder="Event Name" />
          
            </div>
            <div className="form-group py-2">
            
              <input type="text" onChange={handleChange} value={eventtime} name="eventtime" className="form-control" id="artist" placeholder="Event Time" />
            </div>
            
            
            <button onClick={eventPost} type="submit" className="btn btn-primary">Create Event</button>
          </form>
          </div>
        </div>
        <div className="col-3 col">
          
        </div>
      </div>
    </div>
  )
}

export default CreateEvent
