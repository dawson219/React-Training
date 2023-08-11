import React, { createContext } from 'react'
import Page2 from './Page2'

export const TimeContext = createContext('')

const Page1 = () => {
  return (
    <div>
        <h3>Page1</h3>
        <TimeContext.Provider value={new Date()} >
        <Page2/>
        </TimeContext.Provider>
    </div>
  )
}

export default Page1