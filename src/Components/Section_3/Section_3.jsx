import React from 'react'
import "../../App.css"
import mark from "../../Assets/img/mark.jpg"

export const Section_3 = () => {
    return (
        <section>

            <div className="container">

                <div className="king">
                    <h3 className="what">
                        What our customer are saying
                    </h3>

                    <hr className="small" />


                    <div className="big">
                        <div>

                            <img className="mark" src={mark} alt="mark" width="133" height="133" />

                            <p className="edward">
                                Edward Newgate
                                Founder Circle
                            </p>


                        </div>

                        <div className="dedicated">
                            “Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”
                        </div>
                    </div>

                </div>


            </div>


        </section>
    )
}
