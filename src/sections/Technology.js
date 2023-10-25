import React from 'react'
import data from '../data'
import firstTechnologyImage from '../images/image-launch-vehicle-landscape.jpg'
import secondTechnologyImage from '../images/image-spaceport-landscape.jpg'
import thirdTechnologyImage from '../images/image-space-capsule-landscape.jpg'

import mobilefirstTechnologyImage from '../images/image-launch-vehicle-portrait.jpg'
import mobilesecondTechnologyImage from '../images/image-spaceport-portrait.jpg'
import mobilethirdTechnologyImage from '../images/image-space-capsule-portrait.jpg'


function Technology () {

  const [technologyIndex,settechnologyIndex] = React.useState(0)
  const [mobile,setMobile] = React.useState(()=>{
    if (window.innerWidth<1200){
      return true
    } else {
      return false
    }
  })
  let technologyImage = [
    firstTechnologyImage,
    secondTechnologyImage,
    thirdTechnologyImage
  ]

  let mobiletechnologyImage = [
    mobilefirstTechnologyImage,
    mobilesecondTechnologyImage,
    mobilethirdTechnologyImage
  ]

 let technologyNavigation = React.useRef()
 let image =React.useRef()


  function changeTab(e){
    settechnologyIndex(e.target.dataset.index)
    let children= technologyNavigation.current.children
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      child.classList.remove('active')
    }
    e.target.classList.add('active')
  }

  React.useEffect(()=> {
    window.addEventListener('resize' , () => {
      if (window.innerWidth <1200){
        setMobile(true)
      }else{
        setMobile(false)
      }
    })
  })

  return (
    <div className='technology'>
        <div className='technology-subtitle'>
       <span>02</span>  meet your technology
      </div>
      {
        <>
          <div ref={image} className='technology-image'>
            <img src={mobile === false ? mobiletechnologyImage[technologyIndex] : technologyImage[technologyIndex]} alt='' />
          </div>
          <div ref={technologyNavigation} className='technology-navigation'>
            <div data-index={0} onClick={changeTab} className='technology-tab'>1</div>
            <div data-index={1} onClick={changeTab} className='technology-tab'>2</div>
            <div data-index={2} onClick={changeTab} className='technology-tab'>3</div>
          </div> 
          <div className='technology-content'>
            <div className='technology-content-subtitle'>
              the technology...
            </div>
            <div className='technology-content-name'>
              {data.technology[technologyIndex].name}
            </div>
            <div className='technology-content-body'>
              {data.technology[technologyIndex].description}
            </div>
          </div>
             
        </>
      }
    </div>
  )
}

export default Technology