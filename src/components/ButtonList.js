import React from 'react'
import Button from './Button'

const list = ["All", "live", "Gaming"]

const ButtonList = () => {
  

  return (
    <div className="flex">
      <Button name="All"></Button>
      <Button name="Gaming"></Button>
      <Button name="Soccer"></Button>
      <Button name="Songs"></Button>
      <Button name="Cricket"></Button>
      <Button name="Comedy"></Button>
      <Button name="Movies"></Button>
      <Button name="Cooking"></Button>
      <Button name="Hobbies"></Button>
      <Button name="Badminton"></Button>
    </div>
  )
}

export default ButtonList