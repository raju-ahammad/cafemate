import React, { useContext } from 'react'
import { Redirect } from 'react-router';
import { MyContext } from '../../App';

import menuImg from '../../Assets/Images/menu.jpg';

const Menu = () => {

  const context = useContext(MyContext)
  const { token, isAdmin } = context;

  return (
    <>
    {!token ? <Redirect to="/login"/>:
    
    <div className="container">
   
      <h2 className="mt-5"> { isAdmin ? "Manage Todays Special Menu" : "Today's Special Menu"} </h2>
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
      {
        isAdmin? <>
        <div className="row mt-5 p-3">
          <div className="col col-md-3"></div>
          <div className="col col-md-6">
          <form>
              <div class="form-group">
                <label for="exampleFormControlFile1">Image Upload: </label>
                <input type="file" class="form-control-file p-2" id="exampleFormControlFile1"/>
              </div>
              <button  type="submit" className="btn btn-primary">Update</button>
          </form>
          
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

export default Menu
