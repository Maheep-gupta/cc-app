
import React from 'react'

import EventCard from './EventCard'

function FeaturedEventCard() {
  return (
    <>
      <EventCard isFeatured={true} eventName="College Music Fest" eventLoc='College Seminar Hall' eventTime='Mon 10:00 am  - Wed 12:00 pm' eventImage={"https://imgs.search.brave.com/Bnfffv-pScgkbtc6tTTCJIY6zGmalf_PM7swA1XPnus/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/Ny8yMS8yMy81Ny9j/b25jZXJ0LTI1Mjc0/OTVfMTI4MC5qcGc"} eventCategory='Music' />
      <EventCard isFeatured={true} eventName="Dance Competition" eventLoc='College Seminar Hall' eventTime='Mon 10:00 am  - Wed 12:00 pm' eventImage={"https://imgs.search.brave.com/Bnfffv-pScgkbtc6tTTCJIY6zGmalf_PM7swA1XPnus/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/Ny8yMS8yMy81Ny9j/b25jZXJ0LTI1Mjc0/OTVfMTI4MC5qcGc"} eventCategory='Music' />
    </>
  )
}

export default FeaturedEventCard