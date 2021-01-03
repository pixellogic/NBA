import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import SideDrawer from './sideDrawer'
export default class Header extends Component {
    state = {
        drawerOpen: false
    }
    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }
    render() {
        return (
            <div>

                <AppBar position = "static" style={{
                                                    backgroundColor: '#2f2f2f',
                                                    padding: '.5rem 0rem'
                                                    }}>
                    <Toolbar>
                        <div className = "header__toolbar">
                            <div className = "header__toolbar--icon">
                                <IconButton 
                                    edge = "end"
                                    color= "inherit"
                                    aria-label = "menu"
                                    onClick = {() => this.toggleDrawer(true)}
                                    >
                                        <MenuIcon />
                                </IconButton>                                   
                            </div> 
                            <div className = "header__toolbar--logo">
                            <Link to = "/">
                                <img alt = "nba logo" src = "/images/nba_logo.png" className = "header__logo" />
                            </Link>
                            </div>  
                        </div>    
                    </Toolbar>              
                    <SideDrawer
                        open = {this.state.drawerOpen}
                        onClose = {(value) => this.toggleDrawer(value)}
                    />              
                </AppBar>
                
            </div>
        )
    }
}
