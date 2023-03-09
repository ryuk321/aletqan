import React from 'react'
import "./style.scss"
import {BiMailSend} from 'react-icons/bi';

function Mail({size}) {
  return (
    <BiMailSend size={size}/>
  )
}

export default Mail