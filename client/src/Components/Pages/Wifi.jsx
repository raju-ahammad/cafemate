import React, { useContext } from 'react'
import { Redirect } from 'react-router';
import { MyContext } from '../../App';

const Wifi = () => {
  const context = useContext(MyContext)
  const { isAdmin, token } = context;

  return (
    <>
    {!token ? <Redirect to="/login"/>:
    <div className="container">
      <h2 className="mt-5">Wi-Fi Password</h2>
      <hr/>
      <div className="text-center mt-4">
        <h4>Wi-Fi Network: Vibes Live Music Cafe</h4>
        <h4>Password: 03984092384</h4>
      </div>
      {
        isAdmin ? <>
        <div className="row">
        <div className="col col-md-3"></div>
        <div className="col col-md-6 mt-4">
        <div className="card p-4" >
        <form >
        <div className="form-group py-2">
          
          <input type="text" className="form-control" id="song"   name="eventname" aria-describedby="emailHelp" placeholder="Newtwork Name" />
        </div>
        <div className="form-group py-2">

          <input type="text"   name="eventtime" className="form-control" id="artist" placeholder="Password" />
        </div>


        <button  type="submit" className="btn btn-primary">Update</button>
        </form>
        </div>
        </div>
        <div className="col col-md-3"></div>

      </div>
        </>:<></>
      }
      
      
    </div>
}
    </>
  )
}

export default Wifi
