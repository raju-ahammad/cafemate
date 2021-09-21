import React, { useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { MyContext } from '../../App';

const Home = () => {
  const context = useContext(MyContext)
  const { token } = context;

    return (
        <div className="home">
          {!token ? <Redirect to="/login"/>:
          <>
             <h2 className="text-center mt-5">Welocome To Cafe Mate</h2>
             <div className="card__container container mt-5 ">
               <div className="row"> 

                <div className="col-sm-12 col-md-4 p-4">
                  <div className="card bg-primary text-light" >
                    <Link to="/song">
                      <div className="card-header">
                        Song Request
                      </div>
                      <div className="card-body">
                        <small>Click on this card to place a song request to the performing band/artist. You can also upvote the requested songs to play early.</small>
                      </div>
                      </Link>
                  </div>
                </div>

              <div className="col-sm-12 col-md-4 p-4">
              <div className="card bg-warning text-light" >
                <Link to="/wifi">
                  <div className="card-header">
                    Wi-Fi Password
                  </div>
                  <div className="card-body mb-5">
                    <small>Click on this card to reveal wifi cafe/restaurant Wi-Fi password, Cheers!</small>
                  </div>
                  </Link>
              </div>
              </div>
              <div className="col-sm-12 col-md-4 p-4">
              <div className="card bg-success text-light" >
                <Link to="/menu">
                  <div className="card-header">
                    Today’s Special Menu
                  </div>
                  <div className="card-body mb-5">
                    <small>What’s special today? Click on this card to findout today’s special menu.</small>
                  </div>
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
