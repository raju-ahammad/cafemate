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
      <div className="row"></div>
      <div className="song__request">
        
      </div>
    </div>
}
    </>
  )
}

export default Song
