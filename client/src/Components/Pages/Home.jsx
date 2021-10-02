import React, { useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { MyContext } from '../../App';

const Home = () => {
  const context = useContext(MyContext)
  const { token, isAdmin } = context;

    return (
        <div className="home">
          {!token ? <Redirect to="/login"/>:
          <>
             <h2 className="text-center mt-5">Welocome To Cafemate</h2>
             <div className="card__container container mt-5 ">
               <div className="row"> 

                <div className="col-sm-12 col-md-4 p-4">
                  <div className="card home__card bg-primary text-light" >
                    <Link to={ isAdmin ? "/dashboard": "/song"}>
                      {
                        isAdmin ? <><div className="card-header">
                        Manage Events
                      </div>
                      <div className="card-body">
                        <small>Click on this card to manage events for song requests. You can create a new event which will be only one to accept song requests, other open event will be closed automatically</small>
                      </div>
                      </>
                      :
                      <>
                        <div className="card-header">
                          Song Request
                        </div>
                        <div className="card-body">
                          <small>Click on this card to place a song request to the performing band/artist. You can also upvote the requested songs to play early.</small>
                        </div>
                      </>
                      }
                      
                      </Link>
                  </div>
                </div>

              <div className="col-sm-12 col-md-4 p-4">
              <div className="card home__card bg-warning text-light" >
                <Link to="/wifi">
                  {
                    isAdmin ? <>
                    <div className="card-header">
                      Manage Wi-Fi Password
                    </div>
                    <div className="card-body mb-5">
                      <small>Click on this card to manage Wi-Fi Password.</small>
                    </div>
                    </>:
                    <>
                    <div className="card-header">
                    Wi-Fi Password
                  </div>
                  <div className="card-body mb-5">
                    <small>Click on this card to reveal wifi cafe/restaurant Wi-Fi password, Cheers!</small>
                  </div>
                    </>
                  }
                  
                  </Link>
              </div>
              </div>
              <div className="col-sm-12 col-md-4 p-4">
              <div className="card home__card bg-success text-light" >
                <Link to="/menu">
                  {
                    isAdmin ? <>
                    <div className="card-header">
                    Manage Today’s Special Menu
                  </div>
                  <div className="card-body mb-5">
                    <small>Manage today’s special menu.</small>
                  </div>
                    </>: <>
                    <div className="card-header">
                    Today’s Special Menu
                  </div>
                  <div className="card-body mb-5">
                    <small>What’s special today? Click on this card to findout today’s special menu.</small>
                  </div>
                    </>
                  }
                  
                  </Link>
              </div>
              </div>
              </div>
              
            </div>
            </>
          }
        </div>
    )
}

export default Home
