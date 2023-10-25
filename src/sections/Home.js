import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
        <div className='home-content'>
          <div className='home-content-subtitle'>
            so,you want to travle to
          </div>
          <h1 className='home-content-title'>space</h1>
          <p className='home-content-body'>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
          <div className='home-content-explore'>
           <Link to="/destination"> explore</Link>
          </div>
        </div>
    </div>
  )
}

export default Home