import React from 'react'

const SongrequestForm = () => {
  return (
    <div className="form">
      <form>
        <div className="form-group py-2">
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Song Name" />
      
        </div>
        <div className="form-group py-2">
          
          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Artist" />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit Request</button>
      </form>
    </div>
  )
}

export default SongrequestForm
