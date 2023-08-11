import React from 'react'
import { useContext } from 'react'
import { BillContext } from '../App'

const Page3 = () => {
    const value = useContext(BillContext)
  return (
    <div>{value}</div>
  )
}

export default Page3