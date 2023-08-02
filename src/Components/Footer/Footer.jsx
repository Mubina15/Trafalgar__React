import React from 'react'
import "../../App.css"
import logo from "../../Assets/img/Trafalgar.png"
import T from "../../Assets/img/T.png"
import { Foooter__List } from '../Footer__List/Foooter__List'
import { Footer__item } from '../Footer__item/Footer__item'

export const Footer = () => {
    return (
        <footer className='Footer'>

            <div className="container">

                <div className="ver">

                    <div>

                        <div className='Footer_Logo'>
                            <a className="logo" href="#">
                                <img className='T' src={T} alt="logo" />
                                <img src={logo} alt="logo" />
                            </a> 
                        </div>

                        <p className="affordable">
                            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
                        </p>

                        <p className="pty">
                            ©Trafalgar PTY LTD 2020. All rights reserved
                        </p>
                    </div>

                    <div className="list">

                        <ul className="footer__list">
                            <li className="footer__item">
                                <a className="company" href="#">
                                    Company
                                </a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="#">
                                    About
                                </a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="#">
                                    Testimonials
                                </a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="#">
                                    Find a doctor
                                </a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="#">
                                    Apps
                                </a>
                            </li>
                        </ul>

                        <ul className="footer__list">
                            <li className="footer__item">
                                <a className="company" href="#">
                                    Region
                                </a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="#">
                                    Indonesia
                                </a>
                            </li>

                            <li className="footer__item">
                                <a className="footer__link" href="#">
                                    Singapore
                                </a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="#">
                                    Hongkong
                                </a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="#">
                                    Canada
                                </a>
                            </li>
                        </ul>

                        <Foooter__List>
                            <Footer__item />
                        </Foooter__List>

                    </div>

                </div>



            </div>



        </footer>
    )
}
