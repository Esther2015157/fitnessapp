import React from 'react'

function Newschedule() {
  return (
    <div>
      <form className='form-group bg-light p-5 mt-4'>
        <span className='headings fs-5'>Create a new schedule</span>
        <div class="mb-3">
            <label className="form-label">Activity</label>
            <input type="text" className="form-control" placeholder="enter activity"/>
        </div>
        <div class="mb-3">
            <label className="form-label">Time</label>
            <input type="text" className="form-control" placeholder="enter time"/>
        </div>
        <div class="mb-3">
            <label className="form-label">Duration</label>
            <input type="text" className="form-control" placeholder="enter duration"/>
        </div>
        <div class="mb-3">
            <label className="form-label">Status</label>
            <select className='form-select'>
                <option>Pending</option>
                <option>Done</option>
                <option>Missed</option>
            </select>
        </div>
        <div class="mb-3">
            <input type="submit" className="form-control btn btn-sm btn-dark"/>
        </div>
      </form>
    </div>
  )
}

export default Newschedule
