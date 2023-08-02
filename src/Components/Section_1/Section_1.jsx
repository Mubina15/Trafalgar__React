import React from 'react'
import "../../App.css"
import lupa from "../../Assets/img/lupa.png"
import dori from "../../Assets/img/dori.png"
import telefon from "../../Assets/img/telefon.png"
import varaqa from "../../Assets/img/varaqa.png"
import chemodan from "../../Assets/img/chemadan.png"
import royhat from "../../Assets/img/royhat.png"



export const Section_1 = () => {
    return (

        <section>

            <div className="container">

                <div className="service">
                    <h3 className="our">
                        Our services
                    </h3>

                    <hr />

                    <p className="provide">
                        We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health
                    </p>
                </div>


                <div className='card__container'>
                    <div className="card">

                        <img src={lupa} alt="lupa" />

                        <h3 className="search">
                            Search doctor
                        </h3>

                        <p className="choose">
                            Choose your doctor from thousands of specialist, general, and trusted hospitals
                        </p>

                    </div>
                    <div className="card">

                        <img src={dori} alt="dori" />

                        <h3 className="search">
                            Online pharmacy
                        </h3>

                        <p className="buy">
                            Buy  your medicines with our mobile application with a simple delivery system
                        </p>

                    </div>
                    <div className="card">
                        <img src={telefon} alt="telefon" />

                        <h3 className="search">
                            Consultation
                        </h3>

                        <p className="free">
                            Free consultation with our trusted doctors and get the best recomendations
                        </p>

                    </div>
                    <div className="card">
                        <img src={varaqa} alt="varaqa" />

                        <h3 className="search">
                            Details info
                        </h3>

                        <p className="choose">
                            Free consultation with our trusted doctors and get the best recomendations
                        </p>

                    </div>
                    <div className="card">
                        <img src={chemodan} alt="chemodan" />

                        <h3 className="search">
                            Emergency care
                        </h3>

                        <p className="choose">
                            You can get 24/7 urgent care for yourself or your children and your lovely family
                        </p>

                    </div>
                    <div className="card">
                        <img src={royhat} alt="royhat" />


                        <h3 className="search">
                            Tracking
                        </h3>

                        <p className="choose">
                            Track and save your medical history and health data
                        </p>

                    </div>

                </div>
                <a className="learn" href="#">
                    Learn more
                </a>

            </div>



        </section>

    )
}
