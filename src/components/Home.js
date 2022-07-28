import React from 'react'

function Home() {
  return (
    <div>
      <span className='headings'>Dashboard</span>
      <div className='row home-summary'>
        <div className='home-card m-1 shadow-sm p-3 mb-5 bg-white rounded'>
            <span className='headings fs-5'>Workout Summary</span>
            <table className='table mt-3'>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Workout</th>
                        <th scope="col">Total Hours</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Yoga</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Push ups</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Squats</td>
                        <td>5</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='home-card m-1 shadow-sm p-3 mb-5 bg-white rounded'>
            <span className='headings fs-5'>Scheduled activities</span>
            <table className='table mt-3'>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Time</th>
                        <th scope="col">activity</th>
                        <th scope="col">duration</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                        <td>08.00am</td>
                        <td>running</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>01.00pm</td>
                        <td>Yoga</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>10.00pm</td>
                        <td>Squat</td>
                        <td>0.5</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default Home
