'use client'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount} : {amount : number}) => {
  return (
    <div className='w-full'>
      <CountUp 
      end={amount}
      duration={2.75}
      decimal=','
      decimals={2}
      prefix='$'
      />
    </div>
  )
}

export default AnimatedCounter
