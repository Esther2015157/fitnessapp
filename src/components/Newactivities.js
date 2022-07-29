import React from 'react'

function Newactivities() {
  return (
    <div>
      <form className='form-group bg-light p-5 mt-4'>
        <span className='headings fs-5'>Create a new activity</span>
        <div class="mb-3">
            <label className="form-label">Activity</label>
            <input type="text" className="form-control" placeholder="enter activity"/>
        </div>
        <div class="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control"></textarea>
        </div>
        <div class="mb-3">
            <input type="submit" className="form-control btn btn-sm btn-dark"/>
        </div>
      </form>
    </div>
  )
}

export default Newactivities
