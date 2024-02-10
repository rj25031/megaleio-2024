import React from 'react';
import Layout from '../Components/Layouts/Layout'
import './../css/style.css';


function Schedule() {
  return (
    <Layout>
    <div className='flex flex-col'>
        <div id='c1' className="card  bg-red-500">
            01
        </div>
        <div id='c2' className="card bg-yellow-500">02</div>
        <div id='c3' className="card bg-blue-500">03</div>
        <div id='c4' className="card bg-green-500">04</div>
        <div id='c5' className="card bg-purple-500">05</div>
    </div>
    </Layout>
  )
}

export default Schedule