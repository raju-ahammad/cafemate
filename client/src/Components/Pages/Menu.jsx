import React, { useContext } from 'react'
import { Redirect } from 'react-router';
import { MyContext } from '../../App';

import menuImg from '../../Assets/Images/menu.jpg';

const Menu = () => {

  const context = useContext(MyContext)
  const { token } = context;

  return (
    <>
    {!token ? <Redirect to="/login"/>:
    
    <div className="container">
      <h2 className="mt-5">Today's Special Menu</h2>
      <hr/>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="menu__img">
            <img src={menuImg} alt={menuImg.name}/>
          </div>
        </div>
        <div className="col-3"></div>

      </div>
    </div>
   
  }
  </>
  )
}

export default Menu
