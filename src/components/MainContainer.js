import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  console.log("in main cont")
  return (
    <div>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer