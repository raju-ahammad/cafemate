import React, { useContext } from 'react'
import Banner from '../../Assets/Images/banner.png'
import Wifi from '../../Assets/Images/wifi.png'
import Menu from '../../Assets/Images/menu.jpg'
import { Link } from 'react-router-dom'
import { MyContext } from '../../App'
import { Redirect } from 'react-router';


const Landing = () => {
  const context = useContext(MyContext)
  const { isArtist } = context;
  return (
    <>
    { isArtist ? <Redirect to="/song"/>:
    <div className="card__landing">
      <div className="image__conatiner">
        <img src={ Banner } alt="banne"/>
      </div>
      <div className="banner__text">
        <h3 className="text-light">Want to hear your <br/> favourite song?</h3>
        <button type="button" class="btn btn-outline-light my-2"><Link to="/song" className=" landing__btn text-light ">Place a song request</Link> </button>
      </div>
      <h3 className="text-center">More features</h3>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 col p-3">
            <div className="card  border">
              <div className="wifi__Img p-5 " style={{ height:"250px", overflow:"hidden" }}>
                <img style={{ height:"200px" }} src={ Wifi } alt="wifi"/>
              </div>
              
              <hr />
              <div className="content p-4" style={{ height:"250px", overflow:"hidden" }}>
                <h4 className="text-center">WiFi Password</h4>
                <p className="text-center pt-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button className="btn btn-primary d-block m-auto"> <Link to="/wifi" className=" landing__btn text-light ">Get it now</Link></button>
              </div>
            </div>
            
          </div>
          <div className="col-md-6 col-sm-12 col p-3">
          <div className="card border">
          <div className="content p-4" style={{ height:"250px", overflow:"hidden" }}>
                <h4 className="text-center">Today’s Special Menu</h4>
                <p className="text-center pt-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button className="btn btn-primary d-block m-auto"><Link to="/menu" className=" landing__btn text-light ">What’s special?</Link></button>
              </div>
              <hr />
              <div className="wifi__Img p-5" style={{ height:"250px", overflow:"hidden" }}>
                <div style={{ height:"200px" }}>
                  <img  src={ Menu } alt="wifi"/>
                </div>
                
              </div>
             
              
            </div>
          </div>
        </div>
      </div>
    </div>
}
    </>
  )
}

export default Landing
