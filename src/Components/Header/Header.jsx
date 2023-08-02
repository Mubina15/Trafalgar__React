import React from 'react'
import '../../App.css'
import logo from "../../Assets/img/logo.svg"
import { List } from '../List/List'
import { ListItem } from '../ListItem/ListItem'

export const Header = () => {
  return (
    <header>

    <div className="container">

        <div className="header__div">

            <div className="rasm">
                <a className="img" href="index.html">
                    <img src={logo} alt="logo" width="160" height="40" />
                </a>
            </div>

            <List>
              <ListItem />
            </List>

        </div>

        

    </div>
    
</header>

  )
}
