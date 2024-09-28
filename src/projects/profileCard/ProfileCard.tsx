import { useState } from "react"
import "./profileCard.css"
import Facebook from './assets/Facebook.svg'
import github from './assets/github.svg'
import instagram from './assets/instagram.svg'
import linkedin from './assets/linkedin.svg'
import wave from './assets/wave.svg'
import x from './assets/X.svg'

export const ProfileCard = () => {
    return (
        <>
            <div className="main-container">
                <div className="card-container">
                    <div className="card">
                        <div className="image-container">
                            <img
                                src="https://media.licdn.com/dms/image/v2/D5603AQHDyGc88jjARg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715352500695?e=1729728000&v=beta&t=3nMamimsUeIsfJmprppuGRYgfHHTYxEkR8EjWNC9bdo"
                                alt="Profile picture of Goitseone Themba"
                                className="profile-pic"
                            />
                        </div>
                        <div className="handle">
                            <h2 className="name">Goitseone-Themba</h2>
                            <p className="tag">@Themba_dev</p>
                        </div>
                        <div className="socials">
                            <ul className="icon-list">
                                <li>
                                    <a href="https://github.com/Goitseone-Themba" target="_blank">
                                        <img src={github} alt="link to Themba's github profile" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/goitseone-themba-a58828291" target="_blank">
                                        <img src={linkedin} alt="link to Themba's linkedin profile" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://x.com/GoitseoneThemba" target="_blank">
                                        <img src={x} alt="link to Themba's Twitter profile" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/goitseone.themba" target="_blank">
                                        <img src={Facebook} alt="link to Themba's Facebook profile" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/goitseone_roz_themba_/" target="_blank">
                                        <img src={instagram} alt="link to Themba's instagram profile" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="about">
                            <p>
                                FullStack Alchemist in the Making... <br />
                                <br />
                                Crafting immersive UIs and breathing life into pixels with elegant code.
                                <br />
                                Turning caffeine into cutting-edge web experiences, one commit at a time.
                            </p>
                        </div>
                        <div className="button-container">
                            <a href="https://x.com/GoitseoneThemba" target="_blank">
                                <button className="btn-follow">Follow</button>
                            </a>
                            <a href="mailto: goitseonethemba@gmail.com" target="_blank">
                                <button className="btn-message">Message</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
