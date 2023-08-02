import React from 'react'
import "../../App.css"
import doctors from "../../Assets/img/doctors.png"
import onlinedoctors from "../../Assets/img/online_doctors.png"


export const Section_2 = () => {
  return (
    <section>

            <div className="container">
                <div className="two">
                    <div className="">
                        <img src={doctors} alt="doctors" width="650" height="477" />
                    </div>

                    <div className="content">

                        <h3 className="leading">
                            Leading healthcare providers
                        </h3>

                        <p className="trafalgar">
                            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver
                        </p>


                        <a className="learn" href="#">
                            Learn more
                        </a>

                    </div>
                </div>


                <div className="two">

                    <div>

                        <h3 className="mobile">
                            Download our mobile apps
                        </h3>

                        <p className="patient">
                            Our dedicated patient engagement app and  web portal allow you to access information instantaneously (no tedeous form, long calls,  or administrative hassle) and securely
                        </p>

                        <a className="learn" href="#">
                            Download 
                        </a>

                    </div>

                    <div>
                        <img src={onlinedoctors} alt="laboratory" width="665" height="434"/>
                    </div>

                </div>

            </div>

            

        </section>
  )
}
