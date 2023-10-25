import React from 'react'
import moon from '../images/image-moon.png'
import mars from '../images/image-mars.png'
import titan from '../images/image-titan.png'
import europa from '../images/image-europa.png'
import data from '../data'

function Destination ()  {
  const [planetNumber,setPlanetNumber]=React.useState(0)
  const navigation= React.useRef()
  let planetİmages = [
    moon,
    mars,
    titan,
    europa
  ]
  function tabChange(e){
    setPlanetNumber(e.target.dataset.index)
   let children = navigation.current.children;
   for (let i = 0; i < children.length; i++) {
    const child = children[i];
    child.classList.remove('active')
   }
   e.target.classList.add('active')
  }
  return (
    <div className='destination'>
      <div className='destination-content'>
        {
            <>
              <h1 className='destination-content-subtitle'>
                  <span>01</span> pick your destination
                </h1>
                <div className='destination-content-image'>
                  <img src={planetİmages[planetNumber]} alt='' />
                </div>  
                <div ref={navigation} className='destination-content-navigation'>
                  <div data-index={0} onClick={tabChange} className='"tab'>moon</div>
                  <div data-index={1} onClick={tabChange} className='"tab'>mars</div>
                  <div data-index={2} onClick={tabChange} className='"tab'>europa</div>
                  <div data-index={3} onClick={tabChange} className='"tab'>titan</div>
                </div>
                <h1 className='destination-content-title'>
                  {data.destinations[planetNumber].name}      
                </h1> 
                <p className='destination-content-body'>
                  {data.destinations[planetNumber].description}
                </p>  
                <div className='destination-content-info'>
                  <div className='distance'>
                    <p>avg.distance</p>
                    <h1> {data.destinations[planetNumber].distance}</h1>  
                  </div>  
                  <div className='time'>
                    <p>est. travel time</p>
                    <h1> {data.destinations[planetNumber].travel}</h1> 
                    </div>  
                </div> 
            </>
        }
        
      </div> 
    </div>
  )
}

export default Destination