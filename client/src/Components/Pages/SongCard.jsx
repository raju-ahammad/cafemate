import React from 'react'

const SongCard = ({title, artist}) => {
  return (
    <div className="card bg-primary">
      <div className="row p-3 text-white">
        <div className="col-8">
          <h3> {title}</h3>
          <p>Artist: {artist}</p>
          <p>Requested by Abdullah</p>
        </div>
        <div className="col-4">
          <small>5 minutes ago</small>
          <p>Upvote</p>
        </div>

      </div>
    </div>
  )
}

export default SongCard
