import React from 'react'
import '../../App.css'
import boy from "../../Assets/img/boy_and_girl.png"

export const Intro = () => {
  return (
    
    <intro>

    <div className="container">
        <div className="boy">

            <div className="intro__div">

                <h1 className="virtual">
                    Virtual healthcare for you
                </h1>
    
                <p className="everyone">
                    Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
                </p>
    
                <a className="consult" href="#">
                    Consult today
                </a>
    
            </div>
    
            <div>
    
                <img src={boy} alt="boy_and_girl" width="693" height="598"/>
    
            </div>
    

        </div>

       
    </div>

   </intro>

  )
}
