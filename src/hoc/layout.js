import React, { Component } from 'react'
import Header from '../components/header/header'
export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                   {this.props.children}

                footer
                
            </div>
        )
    }
}
