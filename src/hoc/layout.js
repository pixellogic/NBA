import React, { Component } from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                   {this.props.children}

               <Footer />
                
            </div>
        )
    }
}
