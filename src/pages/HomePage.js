import React from 'react';
import Layout from '../Components/Layouts/Layout'
import '../css/home.css'

function HomePage() {
  return (
    <Layout>
      <section className='w-screen h-screen bg-white'>

      </section>
      <section className='w-screen h-screen'>
      <div class="main">
                <div class="cards">
                    <div class="card card-1"><h2>01</h2></div>
                    <div class="card card-2"><h2>02</h2></div>
                    <div class="card card-3"><h2>03</h2></div>
                    {/* <!-- <div class="card card-4"><h2>04</h2></div> --> */}
                </div>
                <div class="cards">
                    <div class="card card-11"><h2>01</h2></div>
                    <div class="card card-22"><h2>02</h2></div>
                    <div class="card card-33"><h2>03</h2></div>
                    {/* <!-- <div class="card card-44"><h2>04</h2></div> --> */}
                </div>
            </div>
      </section>
    </Layout>
  )
}

export default HomePage