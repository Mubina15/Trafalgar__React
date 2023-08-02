import React from 'react'
import "../../App.css"
import ukol from "../../Assets/img/ukol.jpg"
import laboratory from "../../Assets/img/laboratory.jpg"
import mask from "../../Assets/img/mask.jpg"


export const Section_4 = () => {
  return (
    <section>

            <div className="container">

                <h3 className="check">
                    Check out our latest article
                </h3>
    
                <hr className="chiziq"/>

                <div className="curcle">
                    <div className="karta">
                        <img className="ukol" src={ukol} alt="laboratory" width="369" height="246" />
        
                        <h4 className="decoration">
                            Disease detection, check up in the laboratory
                        </h4>
        
                        <p className="case">
                            In this case, the role of the health laboratory is very important to do a disease detection...
                        </p>
        
                        <a className="read" href="#">
                            Read more
                        </a>
                    </div>
                    <div className="karta">
                        <img className="ukol" src={laboratory} alt="laboratory" width="369" height="246"/>
        
                        <h4 className="decoration">
                            Herbal medicines that are safe for consumption
                        </h4>
        
                        <p className="case">
                            Herbal medicine is very widely used at this time because of its very good for your health...
                        </p>
        
                        <a className="read" href="#">
                            Read more
                        </a>
                    </div>
                    <div className="karta">
                        <img className="ukol" src={mask} alt="laboratory" width="369" height="246"/>
        
                        <h4 className="decoration">
                            Natural care for healthy facial skin
                        </h4>
        
                        <p className="case">
                            A healthy lifestyle should start from now and also for your skin health. There are some...
                        </p>
        
                        <a className="read" href="#">
                            Read more
                        </a>
                    </div>

                </div>
    
    
                <a className="view" href="#">
                    View all
                </a>
             
            </div>
           


        </section>
  )
}
