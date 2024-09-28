import React from 'react'
import { ProfileCard } from './projects/profileCard/ProfileCard'
import { RestaurantReservation } from './projects/restaurantReservation/RestaurantReservation'

export const App= () => {
  return (
    <>
    <div style={{display: 'flex'}}>
        <ProfileCard />
        <RestaurantReservation />
    </div>
    </>
  )
}
