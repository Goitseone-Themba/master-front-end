import React from 'react'
import { ProfileCard } from './projects/profileCard/ProfileCard'

export const App= () => {
  return (
    <>
        <ol>
            <li><h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ipsam doloremque assumenda consequatur vel, modi quia ad quaerat blanditiis adipisci optio provident eius asperiores, dolor repellendus velit deleniti tempora soluta.</h1></li>
            <li><h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat quidem quisquam enim fuga consequuntur tempore dolores, quos consequatur modi earum debitis beatae animi deleniti, vero ratione minima, sint veritatis?</h4></li>
            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident impedit tempore quia non enim dolorum itaque blanditiis ea architecto possimus repudiandae labore animi veritatis quae nisi perspiciatis, incidunt soluta. Rem.</p></li>
        </ol>
        <ProfileCard />
    </>
  )
}
