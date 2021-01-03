import React, { Component } from 'react'

export default class Layout extends Component {
    render() {
        return (
            <div>
                header 
                   {this.props.children}

                footer
                
            </div>
        )
    }
}
