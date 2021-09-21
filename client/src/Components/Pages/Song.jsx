import React, { useContext } from 'react'
import { Redirect } from 'react-router';
import { MyContext } from '../../App';

const Song = () => {
  const context = useContext(MyContext)
  const { token } = context;
  return (
    <>
    {!token ? <Redirect to="/login"/> :
    <div className="container">
      <h2 className="mt-5">Song Request</h2>
      <hr/>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-6">
          <div className="song__request bg-primary text-light">
            <p className="p-2">Place a song request</p>
          </div>
          <div className="form">
            <form>
              <div class="form-group py-2">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Song Name" />
            
              </div>
              <div class="form-group py-2">
                
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Artist" />
              </div>
              
              <button type="submit" class="btn btn-primary">Submit Request</button>
            </form>
          </div>
          <div className="bg-warning my-4">
            <p className="p-2 text-light">Songs to be played</p>
          </div>
          <div className="card__container">
            <div className="card bg-primary">
              <div className="row p-3 text-white">
                <div className="col-8">
                  <h3> I'm On</h3>
                  <p>Artist: Paul and Mary, Peter</p>
                  <p>Requested by Abdullah</p>
                </div>
                <div className="col-4">
                  <small>5 minutes ago</small>
                  <p>Upvote</p>
                </div>

              </div>
            </div>

            <div className="card">
              <div className="row p-3">
                <div className="col-8">
                  <h3> I'm On</h3>
                  <p>Artist: Paul and Mary, Peter</p>
                  <p>Requested by Abdullah</p>
                </div>
                <div className="col-4">
                  <small>5 minutes ago</small>
                  <p>Upvote</p>
                </div>

              </div>
            </div>

          </div>
      </div>
      <div className="col-sm-4"></div>
      </div>
    </div>
}
    </>
  )
}

export default Song
