import React from 'react'
import {Link} from 'react-router-dom'

function Activities() {
  return (
    <div>
      <Link className='btn btn-sm btn-secondary' exact to='/newactivities'>New Activitie</Link>
    </div>
  )
}

export default Activities
